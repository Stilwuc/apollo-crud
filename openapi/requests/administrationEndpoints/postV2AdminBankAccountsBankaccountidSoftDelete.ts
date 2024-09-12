import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminBankAccountsBankaccountidSoftDeleteMutationResponse,
    PostV2AdminBankAccountsBankaccountidSoftDeletePathParams,
} from "../../types/administrationEndpoints/PostV2AdminBankAccountsBankaccountidSoftDelete";

/**
 * @link /v2/admin/bank-accounts/:bankAccountId/soft-delete
 */
export async function postV2AdminBankAccountsBankaccountidSoftDelete(
    bankAccountId: PostV2AdminBankAccountsBankaccountidSoftDeletePathParams["bankAccountId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminBankAccountsBankaccountidSoftDeleteMutationResponse>["data"]
> {
    const res =
        await client<PostV2AdminBankAccountsBankaccountidSoftDeleteMutationResponse>(
            {
                method: "post",
                url: `/v2/admin/bank-accounts/${bankAccountId}/soft-delete`,
                ...options,
            }
        );
    return res.data;
}
