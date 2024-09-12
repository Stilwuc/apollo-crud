import { keycloak } from "@/lib/keycloak";
import axios from "axios";

import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Subset of AxiosRequestConfig
 */
export type RequestConfig<TData = unknown> = {
    url?: string;
    method: "get" | "put" | "patch" | "post" | "delete";
    params?: object;
    data?: TData;
    responseType?:
        | "arraybuffer"
        | "blob"
        | "document"
        | "json"
        | "text"
        | "stream";
    signal?: AbortSignal;
    headers?: AxiosRequestConfig["headers"];
};
/**
 * Subset of AxiosResponse
 */
export type ResponseConfig<TData = unknown> = {
    data: TData;
    status: number;
    statusText: string;
    headers?: AxiosResponse["headers"];
};

export const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: "/api",
    paramsSerializer: (params) => {
        const searchParams = new URLSearchParams();
        for (const key of Object.keys(params)) {
            const param = params[key];
            if (Array.isArray(param)) {
                if (param.length) searchParams.append(key, param.join(","));
            } else if (param !== undefined) {
                searchParams.append(key, param);
            }
        }
        return searchParams.toString();
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        if (keycloak.token) {
            config.headers["Authorization"] = `Bearer ${keycloak.token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (res) => {
        return res;
    },
    async (error) => {
        const oriConfig = error.config;

        if (error.response?.status === 401 && !oriConfig._retry) {
            oriConfig._retry = true;

            try {
                // Refresh token then retry once
                return axiosInstance(oriConfig);
            } catch (_error) {
                console.error("Refresh token failed");
                console.error(_error);

                return Promise.reject(_error);
            }
        }

        return Promise.reject(error);
    }
);

export const api = async <TData, TError = unknown, TVariables = unknown>(
    config: AxiosRequestConfig<TVariables>
): Promise<ResponseConfig<TData>> => {
    const promise = axiosInstance
        .request<TVariables, ResponseConfig<TData>>({ ...config })
        .catch((e: AxiosError<TError>) => {
            throw e;
        });

    return promise;
};

export default api;
