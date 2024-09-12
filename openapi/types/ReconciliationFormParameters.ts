export type ReconciliationFormParameters = {
    /**
     * @type integer | undefined, int64
     */
    providerId?: number;
    /**
     * @type integer, int64
     */
    fromId?: number | null;
    /**
     * @type integer, int64
     */
    toId?: number | null;
    /**
     * @type boolean
     */
    ignoreUsdt?: boolean | null;
};
