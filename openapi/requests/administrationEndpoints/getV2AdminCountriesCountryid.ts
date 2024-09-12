import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminCountriesCountryidQueryResponse,
    GetV2AdminCountriesCountryidPathParams,
} from "../../types/administrationEndpoints/GetV2AdminCountriesCountryid";

/**
 * @link /v2/admin/countries/:countryId
 */
export async function getV2AdminCountriesCountryid(
    countryId: GetV2AdminCountriesCountryidPathParams["countryId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminCountriesCountryidQueryResponse>["data"]> {
    const res = await client<GetV2AdminCountriesCountryidQueryResponse>({
        method: "get",
        url: `/v2/admin/countries/${countryId}`,
        ...options,
    });
    return res.data;
}
