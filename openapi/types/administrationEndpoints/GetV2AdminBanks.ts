import type { BankWithCurrencyDtoPagedResponse } from "../BankWithCurrencyDtoPagedResponse";

export type GetV2AdminBanksQueryParams = {
    /**
     * @type string | undefined
     */
    name?: string;
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
export type GetV2AdminBanks200 = BankWithCurrencyDtoPagedResponse;
/**
 * @description OK
 */
export type GetV2AdminBanksQueryResponse = BankWithCurrencyDtoPagedResponse;
export type GetV2AdminBanksQuery = {
    Response: GetV2AdminBanksQueryResponse;
    QueryParams: GetV2AdminBanksQueryParams;
};
