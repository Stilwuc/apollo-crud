import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminBankAccountsBankaccountidUnlockMutationResponse,
    PostV2AdminBankAccountsBankaccountidUnlockPathParams,
} from "../../types/administrationEndpoints/PostV2AdminBankAccountsBankaccountidUnlock";

/**
 * @link /v2/admin/bank-accounts/:bankAccountId/unlock
 */
export async function postV2AdminBankAccountsBankaccountidUnlock(
    bankAccountId: PostV2AdminBankAccountsBankaccountidUnlockPathParams["bankAccountId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminBankAccountsBankaccountidUnlockMutationResponse>["data"]
> {
    const res =
        await client<PostV2AdminBankAccountsBankaccountidUnlockMutationResponse>(
            {
                method: "post",
                url: `/v2/admin/bank-accounts/${bankAccountId}/unlock`,
                ...options,
            }
        );
    return res.data;
}
