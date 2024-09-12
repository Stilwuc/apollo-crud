import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminAutocompleteTeamsQueryResponse,
    GetV2AdminAutocompleteTeamsQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminAutocompleteTeams";

/**
 * @link /v2/admin/autocomplete/teams
 */
export async function getV2AdminAutocompleteTeams(
    params: GetV2AdminAutocompleteTeamsQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminAutocompleteTeamsQueryResponse>["data"]> {
    const res = await client<GetV2AdminAutocompleteTeamsQueryResponse>({
        method: "get",
        url: `/v2/admin/autocomplete/teams`,
        params,
        ...options,
    });
    return res.data;
}
