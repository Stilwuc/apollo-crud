import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PatchV2AdminSystemMutationRequest,
    PatchV2AdminSystemMutationResponse,
} from "../../types/administrationEndpoints/PatchV2AdminSystem";

/**
 * @link /v2/admin/system
 */
export async function patchV2AdminSystem(
    data?: PatchV2AdminSystemMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PatchV2AdminSystemMutationResponse>["data"]> {
    const res = await client<
        PatchV2AdminSystemMutationResponse,
        PatchV2AdminSystemMutationRequest
    >({ method: "patch", url: `/v2/admin/system`, data, ...options });
    return res.data;
}
