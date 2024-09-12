import type { AffiliateResponse } from "../AffiliateResponse";

export type GetV2AdminAffiliatesIdPathParams = {
    /**
     * @type integer, int64
     */
    id: number;
};
/**
 * @description OK
 */
export type GetV2AdminAffiliatesId200 = AffiliateResponse;
/**
 * @description OK
 */
export type GetV2AdminAffiliatesIdQueryResponse = AffiliateResponse;
export type GetV2AdminAffiliatesIdQuery = {
    Response: GetV2AdminAffiliatesIdQueryResponse;
    PathParams: GetV2AdminAffiliatesIdPathParams;
};
