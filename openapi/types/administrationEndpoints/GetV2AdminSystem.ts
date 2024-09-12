import type { ServerStatusDto } from "../ServerStatusDto";

/**
 * @description OK
 */
export type GetV2AdminSystem200 = ServerStatusDto;
/**
 * @description OK
 */
export type GetV2AdminSystemQueryResponse = ServerStatusDto;
export type GetV2AdminSystemQuery = {
    Response: GetV2AdminSystemQueryResponse;
};
