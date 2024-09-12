import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2TeamCardsCardidRestoreMutationResponse,
    PostV2TeamCardsCardidRestorePathParams,
} from "../../types/teamEndpoints/PostV2TeamCardsCardidRestore";

/**
 * @link /v2/team/cards/:cardId/restore
 */
export async function postV2TeamCardsCardidRestore(
    cardId: PostV2TeamCardsCardidRestorePathParams["cardId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2TeamCardsCardidRestoreMutationResponse>["data"]
> {
    const res = await client<PostV2TeamCardsCardidRestoreMutationResponse>({
        method: "post",
        url: `/v2/team/cards/${cardId}/restore`,
        ...options,
    });
    return res.data;
}
