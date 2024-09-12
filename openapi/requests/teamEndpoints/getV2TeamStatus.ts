import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type { GetV2TeamStatusQueryResponse } from "../../types/teamEndpoints/GetV2TeamStatus";

/**
 * @link /v2/team/status
 */
export async function getV2TeamStatus(
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2TeamStatusQueryResponse>["data"]> {
    const res = await client<GetV2TeamStatusQueryResponse>({
        method: "get",
        url: `/v2/team/status`,
        ...options,
    });
    return res.data;
}
