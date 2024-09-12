import type { AffiliateStatusResponse } from "./AffiliateStatusResponse";

export type AffiliateResponse = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    /**
     * @type string | undefined
     */
    name?: string;
    /**
     * @type string | undefined, date-time
     */
    created?: string;
    /**
     * @type number | undefined, double
     */
    balance?: number;
    status?: AffiliateStatusResponse;
};
