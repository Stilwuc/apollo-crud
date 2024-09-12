import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminCountriesMutationRequest,
    PostV2AdminCountriesMutationResponse,
} from "../../types/administrationEndpoints/PostV2AdminCountries";

/**
 * @link /v2/admin/countries
 */
export async function postV2AdminCountries(
    data?: PostV2AdminCountriesMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PostV2AdminCountriesMutationResponse>["data"]> {
    const res = await client<
        PostV2AdminCountriesMutationResponse,
        PostV2AdminCountriesMutationRequest
    >({ method: "post", url: `/v2/admin/countries`, data, ...options });
    return res.data;
}
