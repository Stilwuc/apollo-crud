import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminBanksQueryResponse,
    GetV2AdminBanksQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminBanks";

/**
 * @link /v2/admin/banks
 */
export async function getV2AdminBanks(
    params?: GetV2AdminBanksQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminBanksQueryResponse>["data"]> {
    const res = await client<GetV2AdminBanksQueryResponse>({
        method: "get",
        url: `/v2/admin/banks`,
        params,
        ...options,
    });
    return res.data;
}
