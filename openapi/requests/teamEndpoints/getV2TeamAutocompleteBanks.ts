import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2TeamAutocompleteBanksQueryResponse,
    GetV2TeamAutocompleteBanksQueryParams,
} from "../../types/teamEndpoints/GetV2TeamAutocompleteBanks";

/**
 * @link /v2/team/autocomplete/banks
 */
export async function getV2TeamAutocompleteBanks(
    params: GetV2TeamAutocompleteBanksQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2TeamAutocompleteBanksQueryResponse>["data"]> {
    const res = await client<GetV2TeamAutocompleteBanksQueryResponse>({
        method: "get",
        url: `/v2/team/autocomplete/banks`,
        params,
        ...options,
    });
    return res.data;
}
