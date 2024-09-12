import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2SupportAppealsAppellationidDenyMutationRequest,
    PostV2SupportAppealsAppellationidDenyMutationResponse,
    PostV2SupportAppealsAppellationidDenyPathParams,
} from "../../types/supportEndpoints/PostV2SupportAppealsAppellationidDeny";

/**
 * @link /v2/support/appeals/:appellationId/deny
 */
export async function postV2SupportAppealsAppellationidDeny(
    appellationId: PostV2SupportAppealsAppellationidDenyPathParams["appellationId"],
    data?: PostV2SupportAppealsAppellationidDenyMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2SupportAppealsAppellationidDenyMutationResponse>["data"]
> {
    const res = await client<
        PostV2SupportAppealsAppellationidDenyMutationResponse,
        PostV2SupportAppealsAppellationidDenyMutationRequest
    >({
        method: "post",
        url: `/v2/support/appeals/${appellationId}/deny`,
        data,
        ...options,
    });
    return res.data;
}
