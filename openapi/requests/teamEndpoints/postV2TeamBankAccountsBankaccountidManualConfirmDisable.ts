import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2TeamBankAccountsBankaccountidManualConfirmDisableMutationResponse,
    PostV2TeamBankAccountsBankaccountidManualConfirmDisablePathParams,
} from "../../types/teamEndpoints/PostV2TeamBankAccountsBankaccountidManualConfirmDisable";

/**
 * @link /v2/team/bank-accounts/:bankAccountId/manual-confirm-disable
 */
export async function postV2TeamBankAccountsBankaccountidManualConfirmDisable(
    bankAccountId: PostV2TeamBankAccountsBankaccountidManualConfirmDisablePathParams["bankAccountId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2TeamBankAccountsBankaccountidManualConfirmDisableMutationResponse>["data"]
> {
    const res =
        await client<PostV2TeamBankAccountsBankaccountidManualConfirmDisableMutationResponse>(
            {
                method: "post",
                url: `/v2/team/bank-accounts/${bankAccountId}/manual-confirm-disable`,
                ...options,
            }
        );
    return res.data;
}
