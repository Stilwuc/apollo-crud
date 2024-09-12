import type { TeamTransactionResponseElement } from "./TeamTransactionResponseElement";

export type TeamTransactionResponseElementPagedResponse = {
    /**
     * @type array | undefined
     */
    items?: TeamTransactionResponseElement[];
    /**
     * @type integer | undefined, int32
     */
    pageNumber?: number;
    /**
     * @type integer | undefined, int32
     */
    pageSize?: number;
};
