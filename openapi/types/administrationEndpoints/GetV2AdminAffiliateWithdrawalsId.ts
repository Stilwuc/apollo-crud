import type { AffiliateWithdrawalResponseElement } from "../AffiliateWithdrawalResponseElement";

export type GetV2AdminAffiliateWithdrawalsIdPathParams = {
    /**
     * @type integer, int64
     */
    id: number;
};
/**
 * @description OK
 */
export type GetV2AdminAffiliateWithdrawalsId200 =
    AffiliateWithdrawalResponseElement;
/**
 * @description OK
 */
export type GetV2AdminAffiliateWithdrawalsIdQueryResponse =
    AffiliateWithdrawalResponseElement;
export type GetV2AdminAffiliateWithdrawalsIdQuery = {
    Response: GetV2AdminAffiliateWithdrawalsIdQueryResponse;
    PathParams: GetV2AdminAffiliateWithdrawalsIdPathParams;
};
