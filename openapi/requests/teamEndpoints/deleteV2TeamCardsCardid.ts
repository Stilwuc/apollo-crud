import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    DeleteV2TeamCardsCardidMutationResponse,
    DeleteV2TeamCardsCardidPathParams,
} from "../../types/teamEndpoints/DeleteV2TeamCardsCardid";

/**
 * @link /v2/team/cards/:cardId
 */
export async function deleteV2TeamCardsCardid(
    cardId: DeleteV2TeamCardsCardidPathParams["cardId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<DeleteV2TeamCardsCardidMutationResponse>["data"]> {
    const res = await client<DeleteV2TeamCardsCardidMutationResponse>({
        method: "delete",
        url: `/v2/team/cards/${cardId}`,
        ...options,
    });
    return res.data;
}
