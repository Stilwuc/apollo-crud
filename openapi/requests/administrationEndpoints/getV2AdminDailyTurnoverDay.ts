import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminDailyTurnoverDayQueryResponse,
    GetV2AdminDailyTurnoverDayPathParams,
} from "../../types/administrationEndpoints/GetV2AdminDailyTurnoverDay";

/**
 * @link /v2/admin/daily-turnover/:day
 */
export async function getV2AdminDailyTurnoverDay(
    day: GetV2AdminDailyTurnoverDayPathParams["day"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminDailyTurnoverDayQueryResponse>["data"]> {
    const res = await client<GetV2AdminDailyTurnoverDayQueryResponse>({
        method: "get",
        url: `/v2/admin/daily-turnover/${day}`,
        ...options,
    });
    return res.data;
}
