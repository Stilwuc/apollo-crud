import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2TeamCardsQueryResponse,
    GetV2TeamCardsQueryParams,
} from "../../types/teamEndpoints/GetV2TeamCards";

/**
 * @link /v2/team/cards
 */
export async function getV2TeamCards(
    params?: GetV2TeamCardsQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2TeamCardsQueryResponse>["data"]> {
    const res = await client<GetV2TeamCardsQueryResponse>({
        method: "get",
        url: `/v2/team/cards`,
        params,
        ...options,
    });
    return res.data;
}
