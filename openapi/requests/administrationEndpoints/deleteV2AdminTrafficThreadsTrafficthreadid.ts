import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    DeleteV2AdminTrafficThreadsTrafficthreadidMutationResponse,
    DeleteV2AdminTrafficThreadsTrafficthreadidPathParams,
} from "../../types/administrationEndpoints/DeleteV2AdminTrafficThreadsTrafficthreadid";

/**
 * @link /v2/admin/traffic-threads/:trafficThreadId
 */
export async function deleteV2AdminTrafficThreadsTrafficthreadid(
    trafficThreadId: DeleteV2AdminTrafficThreadsTrafficthreadidPathParams["trafficThreadId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<DeleteV2AdminTrafficThreadsTrafficthreadidMutationResponse>["data"]
> {
    const res =
        await client<DeleteV2AdminTrafficThreadsTrafficthreadidMutationResponse>(
            {
                method: "delete",
                url: `/v2/admin/traffic-threads/${trafficThreadId}`,
                ...options,
            }
        );
    return res.data;
}
