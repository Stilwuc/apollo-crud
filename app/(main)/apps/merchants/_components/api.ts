import { administrationEndpointsService } from "@/openapi/requests";
import { GetV2AdminMerchantsQueryParams } from "@/openapi/types";
import { Nullable } from "primereact/ts-helpers";

export type DeepNullable<T> = {
    [K in keyof T]: DeepNullable<T[K]> | null;
};

export const DEFAULT_PAGE_SIZE = 5;

export const getMerchants = async (
    params: DeepNullable<Partial<GetV2AdminMerchantsQueryParams>>
) => {
    return administrationEndpointsService.getV2AdminMerchants({
        // @NOTE: в ui пагинация с 0, в api пагинация с 1
        pageNumber: (params.pageNumber ?? 0) + 1,
        isDeleted: params.isDeleted ?? undefined,
        isEnabled: params.isEnabled ?? undefined,
        name: params.name || undefined,
        pageSize: params.pageSize ?? DEFAULT_PAGE_SIZE,
        sortBy: params.sortBy || undefined,
    });
};
