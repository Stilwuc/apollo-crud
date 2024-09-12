import type { PaymentProviderWithdrawalPolicyInfoDto } from "./PaymentProviderWithdrawalPolicyInfoDto";

export type PaymentProviderWithdrawalPolicyInfoDtoPagedResponseWithTotalCount =
    {
        /**
         * @type array | undefined
         */
        items?: PaymentProviderWithdrawalPolicyInfoDto[];
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
