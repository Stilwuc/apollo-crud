import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2TeamAppealsIdAcceptMutationResponse,
    PostV2TeamAppealsIdAcceptPathParams,
} from "../../types/teamEndpoints/PostV2TeamAppealsIdAccept";

/**
 * @link /v2/team/appeals/:id/accept
 */
export async function postV2TeamAppealsIdAccept(
    id: PostV2TeamAppealsIdAcceptPathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PostV2TeamAppealsIdAcceptMutationResponse>["data"]> {
    const res = await client<PostV2TeamAppealsIdAcceptMutationResponse>({
        method: "post",
        url: `/v2/team/appeals/${id}/accept`,
        ...options,
    });
    return res.data;
}
