import type { CardLockRequest } from "../CardLockRequest";

export type PostV2AdminCardsCardidLockPathParams = {
    /**
     * @type string, uuid
     */
    cardId: string;
};
/**
 * @description OK
 */
export type PostV2AdminCardsCardidLock200 = unknown;
export type PostV2AdminCardsCardidLockMutationRequest = CardLockRequest;
export type PostV2AdminCardsCardidLockMutationResponse = unknown;
export type PostV2AdminCardsCardidLockMutation = {
    Response: PostV2AdminCardsCardidLockMutationResponse;
    Request: PostV2AdminCardsCardidLockMutationRequest;
    PathParams: PostV2AdminCardsCardidLockPathParams;
};
