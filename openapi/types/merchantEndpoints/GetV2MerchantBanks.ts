import type { MerchantBankDtoPagedResponseWithPageCount } from "../MerchantBankDtoPagedResponseWithPageCount";

export type GetV2MerchantBanksQueryParams = {
    /**
     * @type string | undefined
     */
    Name?: string;
    /**
     * @type string | undefined
     */
    Currency?: string;
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
export type GetV2MerchantBanks200 = MerchantBankDtoPagedResponseWithPageCount;
/**
 * @description OK
 */
export type GetV2MerchantBanksQueryResponse =
    MerchantBankDtoPagedResponseWithPageCount;
export type GetV2MerchantBanksQuery = {
    Response: GetV2MerchantBanksQueryResponse;
    QueryParams: GetV2MerchantBanksQueryParams;
};
