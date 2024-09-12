import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2TeamCardsCardidSoftDeleteMutationResponse,
    PostV2TeamCardsCardidSoftDeletePathParams,
} from "../../types/teamEndpoints/PostV2TeamCardsCardidSoftDelete";

/**
 * @link /v2/team/cards/:cardId/soft-delete
 */
export async function postV2TeamCardsCardidSoftDelete(
    cardId: PostV2TeamCardsCardidSoftDeletePathParams["cardId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2TeamCardsCardidSoftDeleteMutationResponse>["data"]
> {
    const res = await client<PostV2TeamCardsCardidSoftDeleteMutationResponse>({
        method: "post",
        url: `/v2/team/cards/${cardId}/soft-delete`,
        ...options,
    });
    return res.data;
}
