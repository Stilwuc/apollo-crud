export type TrafficThreadTeamDto = {
    /**
     * @type integer | undefined, int32
     */
    id?: number;
    /**
     * @type string | undefined
     */
    teamName?: string;
    /**
     * @type number | undefined, double
     */
    depositRate?: number;
    /**
     * @type number | undefined, double
     */
    withdrawalRate?: number;
    /**
     * @type boolean | undefined
     */
    isEnabled?: boolean;
};
