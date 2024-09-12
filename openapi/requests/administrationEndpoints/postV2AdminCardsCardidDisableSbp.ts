import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminCardsCardidDisableSbpMutationResponse,
    PostV2AdminCardsCardidDisableSbpPathParams,
} from "../../types/administrationEndpoints/PostV2AdminCardsCardidDisableSbp";

/**
 * @link /v2/admin/cards/:cardId/disable-sbp
 */
export async function postV2AdminCardsCardidDisableSbp(
    cardId: PostV2AdminCardsCardidDisableSbpPathParams["cardId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminCardsCardidDisableSbpMutationResponse>["data"]
> {
    const res = await client<PostV2AdminCardsCardidDisableSbpMutationResponse>({
        method: "post",
        url: `/v2/admin/cards/${cardId}/disable-sbp`,
        ...options,
    });
    return res.data;
}
