import type { SmsMessagesResponseElement } from "../SmsMessagesResponseElement";

export type GetV2AdminSmsMessagesQueryParams = {
    /**
     * @type integer | undefined, int32
     */
    pageNumber?: number;
    /**
     * @type integer | undefined, int32
     */
    pageSize?: number;
    /**
     * @type string | undefined
     */
    message?: string;
    /**
     * @type string | undefined
     */
    sender?: string;
    /**
     * @type string | undefined
     */
    receiver?: string;
    /**
     * @type string | undefined
     */
    result?: string;
    /**
     * @type string | undefined
     */
    cardTail?: string;
    /**
     * @type number | undefined, double
     */
    amount?: number;
    /**
     * @type integer | undefined, int64
     */
    transactionId?: number;
    /**
     * @type string | undefined, uuid
     */
    cardId?: string;
};
/**
 * @description OK
 */
export type GetV2AdminSmsMessages200 = SmsMessagesResponseElement;
/**
 * @description OK
 */
export type GetV2AdminSmsMessagesQueryResponse = SmsMessagesResponseElement;
export type GetV2AdminSmsMessagesQuery = {
    Response: GetV2AdminSmsMessagesQueryResponse;
    QueryParams: GetV2AdminSmsMessagesQueryParams;
};
