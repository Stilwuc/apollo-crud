import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminAutocompleteCardsQueryResponse,
    GetV2AdminAutocompleteCardsQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminAutocompleteCards";

/**
 * @link /v2/admin/autocomplete/cards
 */
export async function getV2AdminAutocompleteCards(
    params: GetV2AdminAutocompleteCardsQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminAutocompleteCardsQueryResponse>["data"]> {
    const res = await client<GetV2AdminAutocompleteCardsQueryResponse>({
        method: "get",
        url: `/v2/admin/autocomplete/cards`,
        params,
        ...options,
    });
    return res.data;
}
