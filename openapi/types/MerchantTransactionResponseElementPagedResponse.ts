import type { MerchantTransactionResponseElement } from "./MerchantTransactionResponseElement";

export type MerchantTransactionResponseElementPagedResponse = {
    /**
     * @type array | undefined
     */
    items?: MerchantTransactionResponseElement[];
    /**
     * @type integer | undefined, int32
     */
    pageNumber?: number;
    /**
     * @type integer | undefined, int32
     */
    pageSize?: number;
};
