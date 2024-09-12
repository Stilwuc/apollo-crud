import type { CardAdminDto } from "../CardAdminDto";

export type GetV2AdminCardsCardidPathParams = {
    /**
     * @type string, uuid
     */
    cardId: string;
};
/**
 * @description OK
 */
export type GetV2AdminCardsCardid200 = CardAdminDto;
/**
 * @description OK
 */
export type GetV2AdminCardsCardidQueryResponse = CardAdminDto;
export type GetV2AdminCardsCardidQuery = {
    Response: GetV2AdminCardsCardidQueryResponse;
    PathParams: GetV2AdminCardsCardidPathParams;
};
