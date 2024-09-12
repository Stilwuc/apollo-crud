import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminAffiliatesQueryResponse,
    GetV2AdminAffiliatesQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminAffiliates";

/**
 * @link /v2/admin/affiliates
 */
export async function getV2AdminAffiliates(
    params?: GetV2AdminAffiliatesQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminAffiliatesQueryResponse>["data"]> {
    const res = await client<GetV2AdminAffiliatesQueryResponse>({
        method: "get",
        url: `/v2/admin/affiliates`,
        params,
        ...options,
    });
    return res.data;
}
