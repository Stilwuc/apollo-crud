import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2TeamAppealsIdDeclineMutationResponse,
    PostV2TeamAppealsIdDeclinePathParams,
} from "../../types/teamEndpoints/PostV2TeamAppealsIdDecline";

/**
 * @link /v2/team/appeals/:id/decline
 */
export async function postV2TeamAppealsIdDecline(
    id: PostV2TeamAppealsIdDeclinePathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PostV2TeamAppealsIdDeclineMutationResponse>["data"]> {
    const res = await client<PostV2TeamAppealsIdDeclineMutationResponse>({
        method: "post",
        url: `/v2/team/appeals/${id}/decline`,
        ...options,
    });
    return res.data;
}
