import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2TeamAppealsQueryResponse,
    GetV2TeamAppealsQueryParams,
} from "../../types/teamEndpoints/GetV2TeamAppeals";

/**
 * @link /v2/team/appeals
 */
export async function getV2TeamAppeals(
    params?: GetV2TeamAppealsQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2TeamAppealsQueryResponse>["data"]> {
    const res = await client<GetV2TeamAppealsQueryResponse>({
        method: "get",
        url: `/v2/team/appeals`,
        params,
        ...options,
    });
    return res.data;
}
