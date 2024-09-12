import type { CallbackResponseStatus } from "./CallbackResponseStatus";

export type StandardCallbackResponse = {
    status?: CallbackResponseStatus;
    /**
     * @type string
     */
    error?: string | null;
};
