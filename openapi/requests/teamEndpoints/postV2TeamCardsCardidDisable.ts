import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2TeamCardsCardidDisableMutationResponse,
    PostV2TeamCardsCardidDisablePathParams,
} from "../../types/teamEndpoints/PostV2TeamCardsCardidDisable";

/**
 * @link /v2/team/cards/:cardId/disable
 */
export async function postV2TeamCardsCardidDisable(
    cardId: PostV2TeamCardsCardidDisablePathParams["cardId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2TeamCardsCardidDisableMutationResponse>["data"]
> {
    const res = await client<PostV2TeamCardsCardidDisableMutationResponse>({
        method: "post",
        url: `/v2/team/cards/${cardId}/disable`,
        ...options,
    });
    return res.data;
}
