import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminCardsCardidDisableMutationResponse,
    PostV2AdminCardsCardidDisablePathParams,
} from "../../types/administrationEndpoints/PostV2AdminCardsCardidDisable";

/**
 * @link /v2/admin/cards/:cardId/disable
 */
export async function postV2AdminCardsCardidDisable(
    cardId: PostV2AdminCardsCardidDisablePathParams["cardId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminCardsCardidDisableMutationResponse>["data"]
> {
    const res = await client<PostV2AdminCardsCardidDisableMutationResponse>({
        method: "post",
        url: `/v2/admin/cards/${cardId}/disable`,
        ...options,
    });
    return res.data;
}
