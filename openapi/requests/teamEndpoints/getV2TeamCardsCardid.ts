import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2TeamCardsCardidQueryResponse,
    GetV2TeamCardsCardidPathParams,
} from "../../types/teamEndpoints/GetV2TeamCardsCardid";

/**
 * @link /v2/team/cards/:cardId
 */
export async function getV2TeamCardsCardid(
    cardId: GetV2TeamCardsCardidPathParams["cardId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2TeamCardsCardidQueryResponse>["data"]> {
    const res = await client<GetV2TeamCardsCardidQueryResponse>({
        method: "get",
        url: `/v2/team/cards/${cardId}`,
        ...options,
    });
    return res.data;
}
