import type { AdminAppellationInfoResponse } from "../AdminAppellationInfoResponse";

export type GetV2AdminAppealsIdPathParams = {
    /**
     * @type integer, int64
     */
    id: number;
};
/**
 * @description OK
 */
export type GetV2AdminAppealsId200 = AdminAppellationInfoResponse;
/**
 * @description OK
 */
export type GetV2AdminAppealsIdQueryResponse = AdminAppellationInfoResponse;
export type GetV2AdminAppealsIdQuery = {
    Response: GetV2AdminAppealsIdQueryResponse;
    PathParams: GetV2AdminAppealsIdPathParams;
};
