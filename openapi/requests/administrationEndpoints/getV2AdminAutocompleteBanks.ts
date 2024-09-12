import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminAutocompleteBanksQueryResponse,
    GetV2AdminAutocompleteBanksQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminAutocompleteBanks";

/**
 * @link /v2/admin/autocomplete/banks
 */
export async function getV2AdminAutocompleteBanks(
    params: GetV2AdminAutocompleteBanksQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminAutocompleteBanksQueryResponse>["data"]> {
    const res = await client<GetV2AdminAutocompleteBanksQueryResponse>({
        method: "get",
        url: `/v2/admin/autocomplete/banks`,
        params,
        ...options,
    });
    return res.data;
}
