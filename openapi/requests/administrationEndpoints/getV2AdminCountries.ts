import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type { GetV2AdminCountriesQueryResponse } from "../../types/administrationEndpoints/GetV2AdminCountries";

/**
 * @link /v2/admin/countries
 */
export async function getV2AdminCountries(
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminCountriesQueryResponse>["data"]> {
    const res = await client<GetV2AdminCountriesQueryResponse>({
        method: "get",
        url: `/v2/admin/countries`,
        ...options,
    });
    return res.data;
}
