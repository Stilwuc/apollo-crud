import type { CardDto } from "../CardDto";
import type { UpdateCardRequestBody } from "../UpdateCardRequestBody";

export type PatchV2TeamCardsCardidPathParams = {
    /**
     * @type string, uuid
     */
    cardId: string;
};
/**
 * @description OK
 */
export type PatchV2TeamCardsCardid200 = CardDto;
export type PatchV2TeamCardsCardidMutationRequest = UpdateCardRequestBody;
/**
 * @description OK
 */
export type PatchV2TeamCardsCardidMutationResponse = CardDto;
export type PatchV2TeamCardsCardidMutation = {
    Response: PatchV2TeamCardsCardidMutationResponse;
    Request: PatchV2TeamCardsCardidMutationRequest;
    PathParams: PatchV2TeamCardsCardidPathParams;
};
