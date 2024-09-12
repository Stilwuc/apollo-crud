import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PatchV2AdminMerchantsIdMutationRequest,
    PatchV2AdminMerchantsIdMutationResponse,
    PatchV2AdminMerchantsIdPathParams,
} from "../../types/administrationEndpoints/PatchV2AdminMerchantsId";

/**
 * @link /v2/admin/merchants/:id
 */
export async function patchV2AdminMerchantsId(
    id: PatchV2AdminMerchantsIdPathParams["id"],
    data?: PatchV2AdminMerchantsIdMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PatchV2AdminMerchantsIdMutationResponse>["data"]> {
    const res = await client<
        PatchV2AdminMerchantsIdMutationResponse,
        PatchV2AdminMerchantsIdMutationRequest
    >({ method: "patch", url: `/v2/admin/merchants/${id}`, data, ...options });
    return res.data;
}
