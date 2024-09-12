import type { MerchantWithdrawalPolicyResponseElement } from "./MerchantWithdrawalPolicyResponseElement";

export type MerchantWithdrawalPolicyResponseElementPagedResponseWithTotalCount =
    {
        /**
         * @type array | undefined
         */
        items?: MerchantWithdrawalPolicyResponseElement[];
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
