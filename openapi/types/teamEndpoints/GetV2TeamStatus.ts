import type { TeamStatusResponse } from "../TeamStatusResponse";

/**
 * @description OK
 */
export type GetV2TeamStatus200 = TeamStatusResponse;
/**
 * @description OK
 */
export type GetV2TeamStatusQueryResponse = TeamStatusResponse;
export type GetV2TeamStatusQuery = {
    Response: GetV2TeamStatusQueryResponse;
};
