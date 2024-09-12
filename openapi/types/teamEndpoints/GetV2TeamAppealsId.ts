import type { TeamAppellationInfoResponse } from "../TeamAppellationInfoResponse";

export type GetV2TeamAppealsIdPathParams = {
    /**
     * @type integer, int64
     */
    id: number;
};
/**
 * @description OK
 */
export type GetV2TeamAppealsId200 = TeamAppellationInfoResponse;
/**
 * @description OK
 */
export type GetV2TeamAppealsIdQueryResponse = TeamAppellationInfoResponse;
export type GetV2TeamAppealsIdQuery = {
    Response: GetV2TeamAppealsIdQueryResponse;
    PathParams: GetV2TeamAppealsIdPathParams;
};
