import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminCardsCardidEnableSbpMutationResponse,
    PostV2AdminCardsCardidEnableSbpPathParams,
} from "../../types/administrationEndpoints/PostV2AdminCardsCardidEnableSbp";

/**
 * @link /v2/admin/cards/:cardId/enable-sbp
 */
export async function postV2AdminCardsCardidEnableSbp(
    cardId: PostV2AdminCardsCardidEnableSbpPathParams["cardId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminCardsCardidEnableSbpMutationResponse>["data"]
> {
    const res = await client<PostV2AdminCardsCardidEnableSbpMutationResponse>({
        method: "post",
        url: `/v2/admin/cards/${cardId}/enable-sbp`,
        ...options,
    });
    return res.data;
}
