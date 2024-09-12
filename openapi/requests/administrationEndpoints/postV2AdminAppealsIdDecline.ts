import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminAppealsIdDeclineMutationResponse,
    PostV2AdminAppealsIdDeclinePathParams,
} from "../../types/administrationEndpoints/PostV2AdminAppealsIdDecline";

/**
 * @link /v2/admin/appeals/:id/decline
 */
export async function postV2AdminAppealsIdDecline(
    id: PostV2AdminAppealsIdDeclinePathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminAppealsIdDeclineMutationResponse>["data"]
> {
    const res = await client<PostV2AdminAppealsIdDeclineMutationResponse>({
        method: "post",
        url: `/v2/admin/appeals/${id}/decline`,
        ...options,
    });
    return res.data;
}
