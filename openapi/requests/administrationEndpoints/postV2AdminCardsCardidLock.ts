import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminCardsCardidLockMutationRequest,
    PostV2AdminCardsCardidLockMutationResponse,
    PostV2AdminCardsCardidLockPathParams,
} from "../../types/administrationEndpoints/PostV2AdminCardsCardidLock";

/**
 * @link /v2/admin/cards/:cardId/lock
 */
export async function postV2AdminCardsCardidLock(
    cardId: PostV2AdminCardsCardidLockPathParams["cardId"],
    data?: PostV2AdminCardsCardidLockMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PostV2AdminCardsCardidLockMutationResponse>["data"]> {
    const res = await client<
        PostV2AdminCardsCardidLockMutationResponse,
        PostV2AdminCardsCardidLockMutationRequest
    >({
        method: "post",
        url: `/v2/admin/cards/${cardId}/lock`,
        data,
        ...options,
    });
    return res.data;
}
