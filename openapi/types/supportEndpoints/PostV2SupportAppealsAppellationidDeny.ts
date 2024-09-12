import type { AppellationRequest } from "../AppellationRequest";

export type PostV2SupportAppealsAppellationidDenyPathParams = {
    /**
     * @type integer, int64
     */
    appellationId: number;
};
/**
 * @description OK
 */
export type PostV2SupportAppealsAppellationidDeny200 = unknown;
export type PostV2SupportAppealsAppellationidDenyMutationRequest =
    AppellationRequest;
export type PostV2SupportAppealsAppellationidDenyMutationResponse = unknown;
export type PostV2SupportAppealsAppellationidDenyMutation = {
    Response: PostV2SupportAppealsAppellationidDenyMutationResponse;
    Request: PostV2SupportAppealsAppellationidDenyMutationRequest;
    PathParams: PostV2SupportAppealsAppellationidDenyPathParams;
};
