import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PatchV2AdminTrafficCascadesIdMutationRequest,
    PatchV2AdminTrafficCascadesIdMutationResponse,
    PatchV2AdminTrafficCascadesIdPathParams,
} from "../../types/administrationEndpoints/PatchV2AdminTrafficCascadesId";

/**
 * @link /v2/admin/traffic-cascades/:id
 */
export async function patchV2AdminTrafficCascadesId(
    id: PatchV2AdminTrafficCascadesIdPathParams["id"],
    data?: PatchV2AdminTrafficCascadesIdMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PatchV2AdminTrafficCascadesIdMutationResponse>["data"]
> {
    const res = await client<
        PatchV2AdminTrafficCascadesIdMutationResponse,
        PatchV2AdminTrafficCascadesIdMutationRequest
    >({
        method: "patch",
        url: `/v2/admin/traffic-cascades/${id}`,
        data,
        ...options,
    });
    return res.data;
}
