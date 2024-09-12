import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2TeamBankAccountsBankaccountidRestoreMutationResponse,
    PostV2TeamBankAccountsBankaccountidRestorePathParams,
} from "../../types/teamEndpoints/PostV2TeamBankAccountsBankaccountidRestore";

/**
 * @link /v2/team/bank-accounts/:bankAccountId/restore
 */
export async function postV2TeamBankAccountsBankaccountidRestore(
    bankAccountId: PostV2TeamBankAccountsBankaccountidRestorePathParams["bankAccountId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2TeamBankAccountsBankaccountidRestoreMutationResponse>["data"]
> {
    const res =
        await client<PostV2TeamBankAccountsBankaccountidRestoreMutationResponse>(
            {
                method: "post",
                url: `/v2/team/bank-accounts/${bankAccountId}/restore`,
                ...options,
            }
        );
    return res.data;
}
