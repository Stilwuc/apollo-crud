import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminDailyTurnoverQueryResponse,
    GetV2AdminDailyTurnoverQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminDailyTurnover";

/**
 * @link /v2/admin/daily-turnover
 */
export async function getV2AdminDailyTurnover(
    params?: GetV2AdminDailyTurnoverQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminDailyTurnoverQueryResponse>["data"]> {
    const res = await client<GetV2AdminDailyTurnoverQueryResponse>({
        method: "get",
        url: `/v2/admin/daily-turnover`,
        params,
        ...options,
    });
    return res.data;
}
