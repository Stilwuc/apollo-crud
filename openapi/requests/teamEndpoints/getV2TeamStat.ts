import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type { GetV2TeamStatQueryResponse } from "../../types/teamEndpoints/GetV2TeamStat";

/**
 * @link /v2/team/stat
 */
export async function getV2TeamStat(
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2TeamStatQueryResponse>["data"]> {
    const res = await client<GetV2TeamStatQueryResponse>({
        method: "get",
        url: `/v2/team/stat`,
        ...options,
    });
    return res.data;
}
