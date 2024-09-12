import type { ResponseAppellationStatus } from "./ResponseAppellationStatus";

export type CreateAppellationResponse = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    status?: ResponseAppellationStatus;
};
