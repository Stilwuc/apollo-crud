import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2TeamBankAccountsBankaccountidEnableMutationResponse,
    PostV2TeamBankAccountsBankaccountidEnablePathParams,
} from "../../types/teamEndpoints/PostV2TeamBankAccountsBankaccountidEnable";

/**
 * @link /v2/team/bank-accounts/:bankAccountId/enable
 */
export async function postV2TeamBankAccountsBankaccountidEnable(
    bankAccountId: PostV2TeamBankAccountsBankaccountidEnablePathParams["bankAccountId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2TeamBankAccountsBankaccountidEnableMutationResponse>["data"]
> {
    const res =
        await client<PostV2TeamBankAccountsBankaccountidEnableMutationResponse>(
            {
                method: "post",
                url: `/v2/team/bank-accounts/${bankAccountId}/enable`,
                ...options,
            }
        );
    return res.data;
}
