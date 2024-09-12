import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminCardsCardidEnableMutationResponse,
    PostV2AdminCardsCardidEnablePathParams,
} from "../../types/administrationEndpoints/PostV2AdminCardsCardidEnable";

/**
 * @link /v2/admin/cards/:cardId/enable
 */
export async function postV2AdminCardsCardidEnable(
    cardId: PostV2AdminCardsCardidEnablePathParams["cardId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminCardsCardidEnableMutationResponse>["data"]
> {
    const res = await client<PostV2AdminCardsCardidEnableMutationResponse>({
        method: "post",
        url: `/v2/admin/cards/${cardId}/enable`,
        ...options,
    });
    return res.data;
}
