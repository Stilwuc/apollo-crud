import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2TeamCardsCardidEnableSbpMutationResponse,
    PostV2TeamCardsCardidEnableSbpPathParams,
} from "../../types/teamEndpoints/PostV2TeamCardsCardidEnableSbp";

/**
 * @link /v2/team/cards/:cardId/enable-sbp
 */
export async function postV2TeamCardsCardidEnableSbp(
    cardId: PostV2TeamCardsCardidEnableSbpPathParams["cardId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2TeamCardsCardidEnableSbpMutationResponse>["data"]
> {
    const res = await client<PostV2TeamCardsCardidEnableSbpMutationResponse>({
        method: "post",
        url: `/v2/team/cards/${cardId}/enable-sbp`,
        ...options,
    });
    return res.data;
}
