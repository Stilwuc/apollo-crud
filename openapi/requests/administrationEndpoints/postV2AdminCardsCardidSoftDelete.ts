import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminCardsCardidSoftDeleteMutationResponse,
    PostV2AdminCardsCardidSoftDeletePathParams,
} from "../../types/administrationEndpoints/PostV2AdminCardsCardidSoftDelete";

/**
 * @link /v2/admin/cards/:cardId/soft-delete
 */
export async function postV2AdminCardsCardidSoftDelete(
    cardId: PostV2AdminCardsCardidSoftDeletePathParams["cardId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminCardsCardidSoftDeleteMutationResponse>["data"]
> {
    const res = await client<PostV2AdminCardsCardidSoftDeleteMutationResponse>({
        method: "post",
        url: `/v2/admin/cards/${cardId}/soft-delete`,
        ...options,
    });
    return res.data;
}
