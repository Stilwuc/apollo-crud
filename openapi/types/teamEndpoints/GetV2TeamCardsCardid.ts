import type { CardDto } from "../CardDto";

export type GetV2TeamCardsCardidPathParams = {
    /**
     * @type string, uuid
     */
    cardId: string;
};
/**
 * @description OK
 */
export type GetV2TeamCardsCardid200 = CardDto;
/**
 * @description OK
 */
export type GetV2TeamCardsCardidQueryResponse = CardDto;
export type GetV2TeamCardsCardidQuery = {
    Response: GetV2TeamCardsCardidQueryResponse;
    PathParams: GetV2TeamCardsCardidPathParams;
};
