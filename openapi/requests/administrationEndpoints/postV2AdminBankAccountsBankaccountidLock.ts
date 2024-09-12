import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminBankAccountsBankaccountidLockMutationResponse,
    PostV2AdminBankAccountsBankaccountidLockPathParams,
} from "../../types/administrationEndpoints/PostV2AdminBankAccountsBankaccountidLock";

/**
 * @link /v2/admin/bank-accounts/:bankAccountId/lock
 */
export async function postV2AdminBankAccountsBankaccountidLock(
    bankAccountId: PostV2AdminBankAccountsBankaccountidLockPathParams["bankAccountId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminBankAccountsBankaccountidLockMutationResponse>["data"]
> {
    const res =
        await client<PostV2AdminBankAccountsBankaccountidLockMutationResponse>({
            method: "post",
            url: `/v2/admin/bank-accounts/${bankAccountId}/lock`,
            ...options,
        });
    return res.data;
}
