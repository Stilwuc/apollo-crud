import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminAutocompleteTrafficThreadsQueryResponse,
    GetV2AdminAutocompleteTrafficThreadsQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminAutocompleteTrafficThreads";

/**
 * @link /v2/admin/autocomplete/traffic-threads
 */
export async function getV2AdminAutocompleteTrafficThreads(
    params: GetV2AdminAutocompleteTrafficThreadsQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminAutocompleteTrafficThreadsQueryResponse>["data"]
> {
    const res = await client<GetV2AdminAutocompleteTrafficThreadsQueryResponse>(
        {
            method: "get",
            url: `/v2/admin/autocomplete/traffic-threads`,
            params,
            ...options,
        }
    );
    return res.data;
}
