import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminCardsCardidRestoreMutationResponse,
    PostV2AdminCardsCardidRestorePathParams,
} from "../../types/administrationEndpoints/PostV2AdminCardsCardidRestore";

/**
 * @link /v2/admin/cards/:cardId/restore
 */
export async function postV2AdminCardsCardidRestore(
    cardId: PostV2AdminCardsCardidRestorePathParams["cardId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminCardsCardidRestoreMutationResponse>["data"]
> {
    const res = await client<PostV2AdminCardsCardidRestoreMutationResponse>({
        method: "post",
        url: `/v2/admin/cards/${cardId}/restore`,
        ...options,
    });
    return res.data;
}
