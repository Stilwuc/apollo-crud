import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PatchV2AdminAffiliatesIdMutationRequest,
    PatchV2AdminAffiliatesIdMutationResponse,
    PatchV2AdminAffiliatesIdPathParams,
} from "../../types/administrationEndpoints/PatchV2AdminAffiliatesId";

/**
 * @link /v2/admin/affiliates/:id
 */
export async function patchV2AdminAffiliatesId(
    id: PatchV2AdminAffiliatesIdPathParams["id"],
    data?: PatchV2AdminAffiliatesIdMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PatchV2AdminAffiliatesIdMutationResponse>["data"]> {
    const res = await client<
        PatchV2AdminAffiliatesIdMutationResponse,
        PatchV2AdminAffiliatesIdMutationRequest
    >({ method: "patch", url: `/v2/admin/affiliates/${id}`, data, ...options });
    return res.data;
}
