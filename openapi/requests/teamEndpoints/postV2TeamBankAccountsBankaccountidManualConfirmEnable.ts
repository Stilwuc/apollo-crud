import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2TeamBankAccountsBankaccountidManualConfirmEnableMutationResponse,
    PostV2TeamBankAccountsBankaccountidManualConfirmEnablePathParams,
} from "../../types/teamEndpoints/PostV2TeamBankAccountsBankaccountidManualConfirmEnable";

/**
 * @link /v2/team/bank-accounts/:bankAccountId/manual-confirm-enable
 */
export async function postV2TeamBankAccountsBankaccountidManualConfirmEnable(
    bankAccountId: PostV2TeamBankAccountsBankaccountidManualConfirmEnablePathParams["bankAccountId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2TeamBankAccountsBankaccountidManualConfirmEnableMutationResponse>["data"]
> {
    const res =
        await client<PostV2TeamBankAccountsBankaccountidManualConfirmEnableMutationResponse>(
            {
                method: "post",
                url: `/v2/team/bank-accounts/${bankAccountId}/manual-confirm-enable`,
                ...options,
            }
        );
    return res.data;
}
