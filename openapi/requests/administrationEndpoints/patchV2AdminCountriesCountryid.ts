import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PatchV2AdminCountriesCountryidMutationRequest,
    PatchV2AdminCountriesCountryidMutationResponse,
    PatchV2AdminCountriesCountryidPathParams,
} from "../../types/administrationEndpoints/PatchV2AdminCountriesCountryid";

/**
 * @link /v2/admin/countries/:countryId
 */
export async function patchV2AdminCountriesCountryid(
    countryId: PatchV2AdminCountriesCountryidPathParams["countryId"],
    data?: PatchV2AdminCountriesCountryidMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PatchV2AdminCountriesCountryidMutationResponse>["data"]
> {
    const res = await client<
        PatchV2AdminCountriesCountryidMutationResponse,
        PatchV2AdminCountriesCountryidMutationRequest
    >({
        method: "patch",
        url: `/v2/admin/countries/${countryId}`,
        data,
        ...options,
    });
    return res.data;
}
