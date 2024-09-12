import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2TeamBankAccountsBankaccountidDisableMutationResponse,
    PostV2TeamBankAccountsBankaccountidDisablePathParams,
} from "../../types/teamEndpoints/PostV2TeamBankAccountsBankaccountidDisable";

/**
 * @link /v2/team/bank-accounts/:bankAccountId/disable
 */
export async function postV2TeamBankAccountsBankaccountidDisable(
    bankAccountId: PostV2TeamBankAccountsBankaccountidDisablePathParams["bankAccountId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2TeamBankAccountsBankaccountidDisableMutationResponse>["data"]
> {
    const res =
        await client<PostV2TeamBankAccountsBankaccountidDisableMutationResponse>(
            {
                method: "post",
                url: `/v2/team/bank-accounts/${bankAccountId}/disable`,
                ...options,
            }
        );
    return res.data;
}
