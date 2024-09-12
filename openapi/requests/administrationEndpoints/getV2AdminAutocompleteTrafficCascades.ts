import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminAutocompleteTrafficCascadesQueryResponse,
    GetV2AdminAutocompleteTrafficCascadesQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminAutocompleteTrafficCascades";

/**
 * @link /v2/admin/autocomplete/traffic-cascades
 */
export async function getV2AdminAutocompleteTrafficCascades(
    params: GetV2AdminAutocompleteTrafficCascadesQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminAutocompleteTrafficCascadesQueryResponse>["data"]
> {
    const res =
        await client<GetV2AdminAutocompleteTrafficCascadesQueryResponse>({
            method: "get",
            url: `/v2/admin/autocomplete/traffic-cascades`,
            params,
            ...options,
        });
    return res.data;
}
