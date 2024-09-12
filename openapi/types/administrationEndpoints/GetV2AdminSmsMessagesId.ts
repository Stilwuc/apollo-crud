import type { SmsMessageResponse } from "../SmsMessageResponse";

export type GetV2AdminSmsMessagesIdPathParams = {
    /**
     * @type integer, int64
     */
    id: number;
};
/**
 * @description OK
 */
export type GetV2AdminSmsMessagesId200 = SmsMessageResponse;
/**
 * @description OK
 */
export type GetV2AdminSmsMessagesIdQueryResponse = SmsMessageResponse;
export type GetV2AdminSmsMessagesIdQuery = {
    Response: GetV2AdminSmsMessagesIdQueryResponse;
    PathParams: GetV2AdminSmsMessagesIdPathParams;
};
