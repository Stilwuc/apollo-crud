import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    DeleteV2TeamBankAccountsBankaccountidMutationResponse,
    DeleteV2TeamBankAccountsBankaccountidPathParams,
} from "../../types/teamEndpoints/DeleteV2TeamBankAccountsBankaccountid";

/**
 * @link /v2/team/bank-accounts/:bankAccountId
 */
export async function deleteV2TeamBankAccountsBankaccountid(
    bankAccountId: DeleteV2TeamBankAccountsBankaccountidPathParams["bankAccountId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<DeleteV2TeamBankAccountsBankaccountidMutationResponse>["data"]
> {
    const res =
        await client<DeleteV2TeamBankAccountsBankaccountidMutationResponse>({
            method: "delete",
            url: `/v2/team/bank-accounts/${bankAccountId}`,
            ...options,
        });
    return res.data;
}
