import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2SupportAppealsAppellationidAcceptMutationRequest,
    PostV2SupportAppealsAppellationidAcceptMutationResponse,
    PostV2SupportAppealsAppellationidAcceptPathParams,
} from "../../types/supportEndpoints/PostV2SupportAppealsAppellationidAccept";

/**
 * @link /v2/support/appeals/:appellationId/accept
 */
export async function postV2SupportAppealsAppellationidAccept(
    appellationId: PostV2SupportAppealsAppellationidAcceptPathParams["appellationId"],
    data?: PostV2SupportAppealsAppellationidAcceptMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2SupportAppealsAppellationidAcceptMutationResponse>["data"]
> {
    const res = await client<
        PostV2SupportAppealsAppellationidAcceptMutationResponse,
        PostV2SupportAppealsAppellationidAcceptMutationRequest
    >({
        method: "post",
        url: `/v2/support/appeals/${appellationId}/accept`,
        data,
        ...options,
    });
    return res.data;
}
