import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2TeamBankAccountsBankaccountidQueryResponse,
    GetV2TeamBankAccountsBankaccountidPathParams,
} from "../../types/teamEndpoints/GetV2TeamBankAccountsBankaccountid";

/**
 * @link /v2/team/bank-accounts/:bankAccountId
 */
export async function getV2TeamBankAccountsBankaccountid(
    bankAccountId: GetV2TeamBankAccountsBankaccountidPathParams["bankAccountId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2TeamBankAccountsBankaccountidQueryResponse>["data"]
> {
    const res = await client<GetV2TeamBankAccountsBankaccountidQueryResponse>({
        method: "get",
        url: `/v2/team/bank-accounts/${bankAccountId}`,
        ...options,
    });
    return res.data;
}
