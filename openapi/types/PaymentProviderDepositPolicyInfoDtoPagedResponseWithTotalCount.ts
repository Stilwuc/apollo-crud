import type { PaymentProviderDepositPolicyInfoDto } from "./PaymentProviderDepositPolicyInfoDto";

export type PaymentProviderDepositPolicyInfoDtoPagedResponseWithTotalCount = {
    /**
     * @type array | undefined
     */
    items?: PaymentProviderDepositPolicyInfoDto[];
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
