import type { CardConversionDtoPagedResponseWithTotalCount } from "../CardConversionDtoPagedResponseWithTotalCount";

export type GetV2AdminCardsConversionQueryParams = {
    /**
     * @type string | undefined, uuid
     */
    bankAccountId?: string;
    /**
     * @type string | undefined, uuid
     */
    teamId?: string;
    /**
     * @type string | undefined, uuid
     */
    cardId?: string;
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
export type GetV2AdminCardsConversion200 =
    CardConversionDtoPagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2AdminCardsConversionQueryResponse =
    CardConversionDtoPagedResponseWithTotalCount;
export type GetV2AdminCardsConversionQuery = {
    Response: GetV2AdminCardsConversionQueryResponse;
    QueryParams: GetV2AdminCardsConversionQueryParams;
};
