import type { DefaultTeamDepositPolicyModel } from "./DefaultTeamDepositPolicyModel";
import type { DefaultTeamWithdrawalPolicyModel } from "./DefaultTeamWithdrawalPolicyModel";
import type { DefaultMerchantDepositPolicyModel } from "./DefaultMerchantDepositPolicyModel";
import type { DefaultMerchantWithdrawalPolicyModel } from "./DefaultMerchantWithdrawalPolicyModel";

export type UpdateSystemConfigurationRequest = {
    /**
     * @type object
     */
    defaultTeamDepositPolicy?: {
        [key: string]: DefaultTeamDepositPolicyModel;
    } | null;
    /**
     * @type object
     */
    defaultTeamWithdrawalPolicy?: {
        [key: string]: DefaultTeamWithdrawalPolicyModel;
    } | null;
    /**
     * @type object
     */
    defaultMerchantDepositPolicy?: {
        [key: string]: DefaultMerchantDepositPolicyModel;
    } | null;
    /**
     * @type object
     */
    defaultMerchantWithdrawalPolicy?: {
        [key: string]: DefaultMerchantWithdrawalPolicyModel;
    } | null;
    /**
     * @type string
     */
    teamWithdrawalCommissions?: string | null;
    /**
     * @type string
     */
    merchantWithdrawalCommissions?: string | null;
    /**
     * @type string
     */
    affiliateWithdrawalCommissions?: string | null;
    /**
     * @type boolean
     */
    isInitCardLockingEnabled?: boolean | null;
    /**
     * @type boolean
     */
    isPendingCardLockingEnabled?: boolean | null;
    /**
     * @type boolean
     */
    isConversionCardLockingEnabled?: boolean | null;
    /**
     * @type boolean
     */
    isLimitCardLockingEnabled?: boolean | null;
    /**
     * @type boolean
     */
    isPingBankAccountLockingEnabled?: boolean | null;
    /**
     * @type boolean
     */
    isChilloutCardLockingEnabled?: boolean | null;
    /**
     * @type boolean
     */
    isSystemEnabled?: boolean | null;
};
