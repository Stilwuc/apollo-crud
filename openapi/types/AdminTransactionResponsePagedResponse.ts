import type { AdminTransactionResponse } from "./AdminTransactionResponse";

export type AdminTransactionResponsePagedResponse = {
    /**
     * @type array | undefined
     */
    items?: AdminTransactionResponse[];
    /**
     * @type integer | undefined, int32
     */
    pageNumber?: number;
    /**
     * @type integer | undefined, int32
     */
    pageSize?: number;
};
