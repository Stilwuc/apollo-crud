import type { SmsMessageResponseElement } from "./SmsMessageResponseElement";

export type SmsMessagesResponseElement = {
    /**
     * @type array | undefined
     */
    items?: SmsMessageResponseElement[];
    /**
     * @type integer | undefined, int32
     */
    pageNumber?: number;
    /**
     * @type integer | undefined, int32
     */
    pageSize?: number;
};
