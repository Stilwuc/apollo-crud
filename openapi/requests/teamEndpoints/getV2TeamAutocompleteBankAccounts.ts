import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2TeamAutocompleteBankAccountsQueryResponse,
    GetV2TeamAutocompleteBankAccountsQueryParams,
} from "../../types/teamEndpoints/GetV2TeamAutocompleteBankAccounts";

/**
 * @link /v2/team/autocomplete/bank-accounts
 */
export async function getV2TeamAutocompleteBankAccounts(
    params: GetV2TeamAutocompleteBankAccountsQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2TeamAutocompleteBankAccountsQueryResponse>["data"]
> {
    const res = await client<GetV2TeamAutocompleteBankAccountsQueryResponse>({
        method: "get",
        url: `/v2/team/autocomplete/bank-accounts`,
        params,
        ...options,
    });
    return res.data;
}
