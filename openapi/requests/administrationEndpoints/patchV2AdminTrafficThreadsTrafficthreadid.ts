import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PatchV2AdminTrafficThreadsTrafficthreadidMutationRequest,
    PatchV2AdminTrafficThreadsTrafficthreadidMutationResponse,
    PatchV2AdminTrafficThreadsTrafficthreadidPathParams,
} from "../../types/administrationEndpoints/PatchV2AdminTrafficThreadsTrafficthreadid";

/**
 * @link /v2/admin/traffic-threads/:trafficThreadId
 */
export async function patchV2AdminTrafficThreadsTrafficthreadid(
    trafficThreadId: PatchV2AdminTrafficThreadsTrafficthreadidPathParams["trafficThreadId"],
    data?: PatchV2AdminTrafficThreadsTrafficthreadidMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PatchV2AdminTrafficThreadsTrafficthreadidMutationResponse>["data"]
> {
    const res = await client<
        PatchV2AdminTrafficThreadsTrafficthreadidMutationResponse,
        PatchV2AdminTrafficThreadsTrafficthreadidMutationRequest
    >({
        method: "patch",
        url: `/v2/admin/traffic-threads/${trafficThreadId}`,
        data,
        ...options,
    });
    return res.data;
}
