import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2TeamCardsCardidDisableSbpMutationResponse,
    PostV2TeamCardsCardidDisableSbpPathParams,
} from "../../types/teamEndpoints/PostV2TeamCardsCardidDisableSbp";

/**
 * @link /v2/team/cards/:cardId/disable-sbp
 */
export async function postV2TeamCardsCardidDisableSbp(
    cardId: PostV2TeamCardsCardidDisableSbpPathParams["cardId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2TeamCardsCardidDisableSbpMutationResponse>["data"]
> {
    const res = await client<PostV2TeamCardsCardidDisableSbpMutationResponse>({
        method: "post",
        url: `/v2/team/cards/${cardId}/disable-sbp`,
        ...options,
    });
    return res.data;
}
