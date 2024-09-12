import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminBankAccountsBankaccountidQueryResponse,
    GetV2AdminBankAccountsBankaccountidPathParams,
} from "../../types/administrationEndpoints/GetV2AdminBankAccountsBankaccountid";

/**
 * @link /v2/admin/bank-accounts/:bankAccountId
 */
export async function getV2AdminBankAccountsBankaccountid(
    bankAccountId: GetV2AdminBankAccountsBankaccountidPathParams["bankAccountId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminBankAccountsBankaccountidQueryResponse>["data"]
> {
    const res = await client<GetV2AdminBankAccountsBankaccountidQueryResponse>({
        method: "get",
        url: `/v2/admin/bank-accounts/${bankAccountId}`,
        ...options,
    });
    return res.data;
}
