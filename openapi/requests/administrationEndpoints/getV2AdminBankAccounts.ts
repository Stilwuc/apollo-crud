import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminBankAccountsQueryResponse,
    GetV2AdminBankAccountsQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminBankAccounts";

/**
 * @link /v2/admin/bank-accounts
 */
export async function getV2AdminBankAccounts(
    params?: GetV2AdminBankAccountsQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminBankAccountsQueryResponse>["data"]> {
    const res = await client<GetV2AdminBankAccountsQueryResponse>({
        method: "get",
        url: `/v2/admin/bank-accounts`,
        params,
        ...options,
    });
    return res.data;
}
