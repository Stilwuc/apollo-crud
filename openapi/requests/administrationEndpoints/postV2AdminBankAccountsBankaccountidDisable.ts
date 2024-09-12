import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminBankAccountsBankaccountidDisableMutationResponse,
    PostV2AdminBankAccountsBankaccountidDisablePathParams,
} from "../../types/administrationEndpoints/PostV2AdminBankAccountsBankaccountidDisable";

/**
 * @link /v2/admin/bank-accounts/:bankAccountId/disable
 */
export async function postV2AdminBankAccountsBankaccountidDisable(
    bankAccountId: PostV2AdminBankAccountsBankaccountidDisablePathParams["bankAccountId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminBankAccountsBankaccountidDisableMutationResponse>["data"]
> {
    const res =
        await client<PostV2AdminBankAccountsBankaccountidDisableMutationResponse>(
            {
                method: "post",
                url: `/v2/admin/bank-accounts/${bankAccountId}/disable`,
                ...options,
            }
        );
    return res.data;
}
