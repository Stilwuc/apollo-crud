import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminAppealsIdAcceptMutationResponse,
    PostV2AdminAppealsIdAcceptPathParams,
} from "../../types/administrationEndpoints/PostV2AdminAppealsIdAccept";

/**
 * @link /v2/admin/appeals/:id/accept
 */
export async function postV2AdminAppealsIdAccept(
    id: PostV2AdminAppealsIdAcceptPathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PostV2AdminAppealsIdAcceptMutationResponse>["data"]> {
    const res = await client<PostV2AdminAppealsIdAcceptMutationResponse>({
        method: "post",
        url: `/v2/admin/appeals/${id}/accept`,
        ...options,
    });
    return res.data;
}
