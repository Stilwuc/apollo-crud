import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminAffiliatesIdQueryResponse,
    GetV2AdminAffiliatesIdPathParams,
} from "../../types/administrationEndpoints/GetV2AdminAffiliatesId";

/**
 * @link /v2/admin/affiliates/:id
 */
export async function getV2AdminAffiliatesId(
    id: GetV2AdminAffiliatesIdPathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminAffiliatesIdQueryResponse>["data"]> {
    const res = await client<GetV2AdminAffiliatesIdQueryResponse>({
        method: "get",
        url: `/v2/admin/affiliates/${id}`,
        ...options,
    });
    return res.data;
}
