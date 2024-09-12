import type { TotalElement } from "./TotalElement";
import type { DailyTurnoverMerchantData } from "./DailyTurnoverMerchantData";
import type { DailyTurnoverTeamData } from "./DailyTurnoverTeamData";
import type { DailyTurnoverProviderData } from "./DailyTurnoverProviderData";

export type DailyTurnoverResponse = {
    total?: TotalElement;
    /**
     * @type array | undefined
     */
    merchants?: DailyTurnoverMerchantData[];
    /**
     * @type array | undefined
     */
    teams?: DailyTurnoverTeamData[];
    /**
     * @type array | undefined
     */
    providers?: DailyTurnoverProviderData[];
};
