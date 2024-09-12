import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type { GetV2AdminTrafficThreadsQueryResponse } from "../../types/administrationEndpoints/GetV2AdminTrafficThreads";

/**
 * @link /v2/admin/traffic-threads
 */
export async function getV2AdminTrafficThreads(
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminTrafficThreadsQueryResponse>["data"]> {
    const res = await client<GetV2AdminTrafficThreadsQueryResponse>({
        method: "get",
        url: `/v2/admin/traffic-threads`,
        ...options,
    });
    return res.data;
}
