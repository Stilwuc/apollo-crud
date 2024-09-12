import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminAutocompleteBankAccountsQueryResponse,
    GetV2AdminAutocompleteBankAccountsQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminAutocompleteBankAccounts";

/**
 * @link /v2/admin/autocomplete/bank-accounts
 */
export async function getV2AdminAutocompleteBankAccounts(
    params: GetV2AdminAutocompleteBankAccountsQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminAutocompleteBankAccountsQueryResponse>["data"]
> {
    const res = await client<GetV2AdminAutocompleteBankAccountsQueryResponse>({
        method: "get",
        url: `/v2/admin/autocomplete/bank-accounts`,
        params,
        ...options,
    });
    return res.data;
}
