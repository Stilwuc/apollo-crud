import type { AffiliateResponse } from "../AffiliateResponse";
import type { UpdateAffiliateRequest } from "../UpdateAffiliateRequest";

export type PatchV2AdminAffiliatesIdPathParams = {
    /**
     * @type integer, int64
     */
    id: number;
};
/**
 * @description OK
 */
export type PatchV2AdminAffiliatesId200 = AffiliateResponse;
export type PatchV2AdminAffiliatesIdMutationRequest = UpdateAffiliateRequest;
/**
 * @description OK
 */
export type PatchV2AdminAffiliatesIdMutationResponse = AffiliateResponse;
export type PatchV2AdminAffiliatesIdMutation = {
    Response: PatchV2AdminAffiliatesIdMutationResponse;
    Request: PatchV2AdminAffiliatesIdMutationRequest;
    PathParams: PatchV2AdminAffiliatesIdPathParams;
};
