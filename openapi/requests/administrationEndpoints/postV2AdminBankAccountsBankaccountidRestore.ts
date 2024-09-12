import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminBankAccountsBankaccountidRestoreMutationResponse,
    PostV2AdminBankAccountsBankaccountidRestorePathParams,
} from "../../types/administrationEndpoints/PostV2AdminBankAccountsBankaccountidRestore";

/**
 * @link /v2/admin/bank-accounts/:bankAccountId/restore
 */
export async function postV2AdminBankAccountsBankaccountidRestore(
    bankAccountId: PostV2AdminBankAccountsBankaccountidRestorePathParams["bankAccountId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminBankAccountsBankaccountidRestoreMutationResponse>["data"]
> {
    const res =
        await client<PostV2AdminBankAccountsBankaccountidRestoreMutationResponse>(
            {
                method: "post",
                url: `/v2/admin/bank-accounts/${bankAccountId}/restore`,
                ...options,
            }
        );
    return res.data;
}
