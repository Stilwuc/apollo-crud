import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminTrafficThreadsTrafficthreadidQueryResponse,
    GetV2AdminTrafficThreadsTrafficthreadidPathParams,
} from "../../types/administrationEndpoints/GetV2AdminTrafficThreadsTrafficthreadid";

/**
 * @link /v2/admin/traffic-threads/:trafficThreadId
 */
export async function getV2AdminTrafficThreadsTrafficthreadid(
    trafficThreadId: GetV2AdminTrafficThreadsTrafficthreadidPathParams["trafficThreadId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminTrafficThreadsTrafficthreadidQueryResponse>["data"]
> {
    const res =
        await client<GetV2AdminTrafficThreadsTrafficthreadidQueryResponse>({
            method: "get",
            url: `/v2/admin/traffic-threads/${trafficThreadId}`,
            ...options,
        });
    return res.data;
}
