import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminCardsQueryResponse,
    GetV2AdminCardsQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminCards";

/**
 * @link /v2/admin/cards
 */
export async function getV2AdminCards(
    params?: GetV2AdminCardsQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminCardsQueryResponse>["data"]> {
    const res = await client<GetV2AdminCardsQueryResponse>({
        method: "get",
        url: `/v2/admin/cards`,
        params,
        ...options,
    });
    return res.data;
}
