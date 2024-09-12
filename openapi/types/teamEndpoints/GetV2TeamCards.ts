import type { CardDto } from "../CardDto";

export type GetV2TeamCardsQueryParams = {
    /**
     * @type integer | undefined, int32
     */
    pageNumber?: number;
    /**
     * @type integer | undefined, int32
     */
    pageSize?: number;
    /**
     * @type string | undefined
     */
    sortBy?: string;
};
/**
 * @description OK
 */
export type GetV2TeamCards200 = CardDto[];
/**
 * @description OK
 */
export type GetV2TeamCardsQueryResponse = CardDto[];
export type GetV2TeamCardsQuery = {
    Response: GetV2TeamCardsQueryResponse;
    QueryParams: GetV2TeamCardsQueryParams;
};
