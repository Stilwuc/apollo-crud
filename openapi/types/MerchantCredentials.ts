import type { PlatformCredentials } from "./PlatformCredentials";
import type { ClientCredentials } from "./ClientCredentials";

export type MerchantCredentials = {
    platformCredentials?: PlatformCredentials;
    apiCredentials?: ClientCredentials;
};
