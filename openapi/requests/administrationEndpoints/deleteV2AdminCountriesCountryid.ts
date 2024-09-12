import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    DeleteV2AdminCountriesCountryidMutationResponse,
    DeleteV2AdminCountriesCountryidPathParams,
} from "../../types/administrationEndpoints/DeleteV2AdminCountriesCountryid";

/**
 * @link /v2/admin/countries/:countryId
 */
export async function deleteV2AdminCountriesCountryid(
    countryId: DeleteV2AdminCountriesCountryidPathParams["countryId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<DeleteV2AdminCountriesCountryidMutationResponse>["data"]
> {
    const res = await client<DeleteV2AdminCountriesCountryidMutationResponse>({
        method: "delete",
        url: `/v2/admin/countries/${countryId}`,
        ...options,
    });
    return res.data;
}
