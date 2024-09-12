import type { AppellationRequest } from "../AppellationRequest";

export type PostV2SupportAppealsAppellationidAcceptPathParams = {
    /**
     * @type integer, int64
     */
    appellationId: number;
};
/**
 * @description OK
 */
export type PostV2SupportAppealsAppellationidAccept200 = unknown;
export type PostV2SupportAppealsAppellationidAcceptMutationRequest =
    AppellationRequest;
export type PostV2SupportAppealsAppellationidAcceptMutationResponse = unknown;
export type PostV2SupportAppealsAppellationidAcceptMutation = {
    Response: PostV2SupportAppealsAppellationidAcceptMutationResponse;
    Request: PostV2SupportAppealsAppellationidAcceptMutationRequest;
    PathParams: PostV2SupportAppealsAppellationidAcceptPathParams;
};
