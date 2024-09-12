import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2TeamAutocompleteCountriesQueryResponse,
    GetV2TeamAutocompleteCountriesQueryParams,
} from "../../types/teamEndpoints/GetV2TeamAutocompleteCountries";

/**
 * @link /v2/team/autocomplete/countries
 */
export async function getV2TeamAutocompleteCountries(
    params: GetV2TeamAutocompleteCountriesQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2TeamAutocompleteCountriesQueryResponse>["data"]
> {
    const res = await client<GetV2TeamAutocompleteCountriesQueryResponse>({
        method: "get",
        url: `/v2/team/autocomplete/countries`,
        params,
        ...options,
    });
    return res.data;
}
