import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2TeamCardsCardidEnableMutationResponse,
    PostV2TeamCardsCardidEnablePathParams,
} from "../../types/teamEndpoints/PostV2TeamCardsCardidEnable";

/**
 * @link /v2/team/cards/:cardId/enable
 */
export async function postV2TeamCardsCardidEnable(
    cardId: PostV2TeamCardsCardidEnablePathParams["cardId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2TeamCardsCardidEnableMutationResponse>["data"]
> {
    const res = await client<PostV2TeamCardsCardidEnableMutationResponse>({
        method: "post",
        url: `/v2/team/cards/${cardId}/enable`,
        ...options,
    });
    return res.data;
}
