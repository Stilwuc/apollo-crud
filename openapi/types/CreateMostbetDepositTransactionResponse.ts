import type { MostbetTransactionLinkResponseElement } from "./MostbetTransactionLinkResponseElement";

export type CreateMostbetDepositTransactionResponse = {
    /**
     * @type string | undefined
     */
    url?: string;
    link?: MostbetTransactionLinkResponseElement;
    /**
     * @type integer | undefined, int64
     */
    transactionId?: number;
};
