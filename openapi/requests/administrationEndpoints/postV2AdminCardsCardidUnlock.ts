import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminCardsCardidUnlockMutationResponse,
    PostV2AdminCardsCardidUnlockPathParams,
} from "../../types/administrationEndpoints/PostV2AdminCardsCardidUnlock";

/**
 * @link /v2/admin/cards/:cardId/unlock
 */
export async function postV2AdminCardsCardidUnlock(
    cardId: PostV2AdminCardsCardidUnlockPathParams["cardId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminCardsCardidUnlockMutationResponse>["data"]
> {
    const res = await client<PostV2AdminCardsCardidUnlockMutationResponse>({
        method: "post",
        url: `/v2/admin/cards/${cardId}/unlock`,
        ...options,
    });
    return res.data;
}
