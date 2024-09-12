import type { MerchantDepositResponseDto } from "./MerchantDepositResponseDto";

export type MerchantDepositResponseDtoPagedResponseWithTotalCount = {
    /**
     * @type array | undefined
     */
    items?: MerchantDepositResponseDto[];
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
    totalCount?: number;
    /**
     * @type integer | undefined, int32
     */
    readonly pageCount?: number;
};
