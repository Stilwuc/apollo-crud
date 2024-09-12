export type AffiliateTeamPolicyCreateRequest = {
    /**
     * @type string | undefined, uuid
     */
    teamId?: string;
    /**
     * @type string | undefined, uuid
     */
    currencyId?: string;
    /**
     * @type string | undefined
     */
    inType?: string;
    /**
     * @type number | undefined, double
     */
    inValue?: number;
    /**
     * @type string | undefined
     */
    outType?: string;
    /**
     * @type number | undefined, double
     */
    outValue?: number;
};
