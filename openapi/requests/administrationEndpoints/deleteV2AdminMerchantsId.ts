import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    DeleteV2AdminMerchantsIdMutationResponse,
    DeleteV2AdminMerchantsIdPathParams,
} from "../../types/administrationEndpoints/DeleteV2AdminMerchantsId";

/**
 * @link /v2/admin/merchants/:id
 */
export async function deleteV2AdminMerchantsId(
    id: DeleteV2AdminMerchantsIdPathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<DeleteV2AdminMerchantsIdMutationResponse>["data"]> {
    const res = await client<DeleteV2AdminMerchantsIdMutationResponse>({
        method: "delete",
        url: `/v2/admin/merchants/${id}`,
        ...options,
    });
    return res.data;
}
