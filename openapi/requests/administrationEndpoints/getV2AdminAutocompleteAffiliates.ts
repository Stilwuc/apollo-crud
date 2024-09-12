import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminAutocompleteAffiliatesQueryResponse,
    GetV2AdminAutocompleteAffiliatesQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminAutocompleteAffiliates";

/**
 * @link /v2/admin/autocomplete/affiliates
 */
export async function getV2AdminAutocompleteAffiliates(
    params: GetV2AdminAutocompleteAffiliatesQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminAutocompleteAffiliatesQueryResponse>["data"]
> {
    const res = await client<GetV2AdminAutocompleteAffiliatesQueryResponse>({
        method: "get",
        url: `/v2/admin/autocomplete/affiliates`,
        params,
        ...options,
    });
    return res.data;
}
