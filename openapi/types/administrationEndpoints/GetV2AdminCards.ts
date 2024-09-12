import type { CardsAdminDtoPagedResponseWithTotalCount } from "../CardsAdminDtoPagedResponseWithTotalCount";

export type GetV2AdminCardsQueryParams = {
    /**
     * @type string | undefined, uuid
     */
    bankAccountId?: string;
    /**
     * @type string | undefined, uuid
     */
    teamId?: string;
    /**
     * @type string | undefined
     */
    number?: string;
    /**
     * @type boolean | undefined
     */
    isEnabled?: boolean;
    /**
     * @type boolean | undefined
     */
    isDeleted?: boolean;
    /**
     * @type integer | undefined, int32
     */
    pageNumber?: number;
    /**
     * @type integer | undefined, int32
     */
    pageSize?: number;
};
/**
 * @description OK
 */
export type GetV2AdminCards200 = CardsAdminDtoPagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2AdminCardsQueryResponse =
    CardsAdminDtoPagedResponseWithTotalCount;
export type GetV2AdminCardsQuery = {
    Response: GetV2AdminCardsQueryResponse;
    QueryParams: GetV2AdminCardsQueryParams;
};
