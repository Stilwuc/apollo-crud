import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminCurrenciesMutationRequest,
    PostV2AdminCurrenciesMutationResponse,
} from "../../types/administrationEndpoints/PostV2AdminCurrencies";

/**
 * @link /v2/admin/currencies
 */
export async function postV2AdminCurrencies(
    data?: PostV2AdminCurrenciesMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PostV2AdminCurrenciesMutationResponse>["data"]> {
    const res = await client<
        PostV2AdminCurrenciesMutationResponse,
        PostV2AdminCurrenciesMutationRequest
    >({ method: "post", url: `/v2/admin/currencies`, data, ...options });
    return res.data;
}
