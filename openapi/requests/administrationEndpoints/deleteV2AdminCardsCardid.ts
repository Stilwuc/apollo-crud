import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    DeleteV2AdminCardsCardidMutationResponse,
    DeleteV2AdminCardsCardidPathParams,
} from "../../types/administrationEndpoints/DeleteV2AdminCardsCardid";

/**
 * @link /v2/admin/cards/:cardId
 */
export async function deleteV2AdminCardsCardid(
    cardId: DeleteV2AdminCardsCardidPathParams["cardId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<DeleteV2AdminCardsCardidMutationResponse>["data"]> {
    const res = await client<DeleteV2AdminCardsCardidMutationResponse>({
        method: "delete",
        url: `/v2/admin/cards/${cardId}`,
        ...options,
    });
    return res.data;
}
