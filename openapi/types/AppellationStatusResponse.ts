import type { ResponseAppellationStatus } from "./ResponseAppellationStatus";

export type AppellationStatusResponse = {
    /**
     * @type integer | undefined, int64
     */
    id?: number;
    status?: ResponseAppellationStatus;
};
