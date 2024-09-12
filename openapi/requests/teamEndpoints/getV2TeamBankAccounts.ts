import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2TeamBankAccountsQueryResponse,
    GetV2TeamBankAccountsQueryParams,
} from "../../types/teamEndpoints/GetV2TeamBankAccounts";

/**
 * @link /v2/team/bank-accounts
 */
export async function getV2TeamBankAccounts(
    params?: GetV2TeamBankAccountsQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2TeamBankAccountsQueryResponse>["data"]> {
    const res = await client<GetV2TeamBankAccountsQueryResponse>({
        method: "get",
        url: `/v2/team/bank-accounts`,
        params,
        ...options,
    });
    return res.data;
}
