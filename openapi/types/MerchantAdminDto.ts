import type { MerchantConfiguration } from "./MerchantConfiguration";
import type { AffiliateDto } from "./AffiliateDto";

export type MerchantAdminDto = {
    /**
     * @type string | undefined, uuid
     */
    id?: string;
    /**
     * @type string | undefined
     */
    name?: string;
    /**
     * @type number | undefined, double
     */
    balance?: number;
    /**
     * @type boolean | undefined
     */
    isEnabled?: boolean;
    /**
     * @type boolean | undefined
     */
    isDeleted?: boolean;
    /**
     * @type string | undefined
     */
    timezone?: string;
    /**
     * @type string | undefined, date-time
     */
    created?: string;
    /**
     * @type string | undefined, date-time
     */
    lastModified?: string;
    /**
     * @type string
     */
    shopName?: string | null;
    configuration?: MerchantConfiguration;
    affiliate?: AffiliateDto;
};
