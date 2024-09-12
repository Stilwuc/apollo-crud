import type { DailyTurnoverResponse } from "../DailyTurnoverResponse";

export type GetV2AdminDailyTurnoverDayPathParams = {
    /**
     * @type string, date-time
     */
    day: string;
};
/**
 * @description OK
 */
export type GetV2AdminDailyTurnoverDay200 = DailyTurnoverResponse;
/**
 * @description OK
 */
export type GetV2AdminDailyTurnoverDayQueryResponse = DailyTurnoverResponse;
export type GetV2AdminDailyTurnoverDayQuery = {
    Response: GetV2AdminDailyTurnoverDayQueryResponse;
    PathParams: GetV2AdminDailyTurnoverDayPathParams;
};
