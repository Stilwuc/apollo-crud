import type { MerchantBankDto } from "./MerchantBankDto";

export type MerchantBankDtoPagedResponseWithPageCount = {
    /**
     * @type array | undefined
     */
    items?: MerchantBankDto[];
    /**
     * @type integer | undefined, int32
     */
    pageNumber?: number;
    /**
     * @type integer | undefined, int32
     */
    pageSize?: number;
    /**
     * @type integer | undefined, int32
     */
    pageCount?: number;
};
