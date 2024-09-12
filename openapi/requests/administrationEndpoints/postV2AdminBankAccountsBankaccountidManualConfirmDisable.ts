import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminBankAccountsBankaccountidManualConfirmDisableMutationResponse,
    PostV2AdminBankAccountsBankaccountidManualConfirmDisablePathParams,
} from "../../types/administrationEndpoints/PostV2AdminBankAccountsBankaccountidManualConfirmDisable";

/**
 * @link /v2/admin/bank-accounts/:bankAccountId/manual-confirm-disable
 */
export async function postV2AdminBankAccountsBankaccountidManualConfirmDisable(
    bankAccountId: PostV2AdminBankAccountsBankaccountidManualConfirmDisablePathParams["bankAccountId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminBankAccountsBankaccountidManualConfirmDisableMutationResponse>["data"]
> {
    const res =
        await client<PostV2AdminBankAccountsBankaccountidManualConfirmDisableMutationResponse>(
            {
                method: "post",
                url: `/v2/admin/bank-accounts/${bankAccountId}/manual-confirm-disable`,
                ...options,
            }
        );
    return res.data;
}
