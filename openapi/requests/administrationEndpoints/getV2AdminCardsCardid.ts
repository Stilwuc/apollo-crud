import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminCardsCardidQueryResponse,
    GetV2AdminCardsCardidPathParams,
} from "../../types/administrationEndpoints/GetV2AdminCardsCardid";

/**
 * @link /v2/admin/cards/:cardId
 */
export async function getV2AdminCardsCardid(
    cardId: GetV2AdminCardsCardidPathParams["cardId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminCardsCardidQueryResponse>["data"]> {
    const res = await client<GetV2AdminCardsCardidQueryResponse>({
        method: "get",
        url: `/v2/admin/cards/${cardId}`,
        ...options,
    });
    return res.data;
}
