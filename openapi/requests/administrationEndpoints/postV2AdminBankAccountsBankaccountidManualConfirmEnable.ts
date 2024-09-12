import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminBankAccountsBankaccountidManualConfirmEnableMutationResponse,
    PostV2AdminBankAccountsBankaccountidManualConfirmEnablePathParams,
} from "../../types/administrationEndpoints/PostV2AdminBankAccountsBankaccountidManualConfirmEnable";

/**
 * @link /v2/admin/bank-accounts/:bankAccountId/manual-confirm-enable
 */
export async function postV2AdminBankAccountsBankaccountidManualConfirmEnable(
    bankAccountId: PostV2AdminBankAccountsBankaccountidManualConfirmEnablePathParams["bankAccountId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminBankAccountsBankaccountidManualConfirmEnableMutationResponse>["data"]
> {
    const res =
        await client<PostV2AdminBankAccountsBankaccountidManualConfirmEnableMutationResponse>(
            {
                method: "post",
                url: `/v2/admin/bank-accounts/${bankAccountId}/manual-confirm-enable`,
                ...options,
            }
        );
    return res.data;
}
