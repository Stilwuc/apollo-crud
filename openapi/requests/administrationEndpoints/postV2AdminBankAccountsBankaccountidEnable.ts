import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminBankAccountsBankaccountidEnableMutationResponse,
    PostV2AdminBankAccountsBankaccountidEnablePathParams,
} from "../../types/administrationEndpoints/PostV2AdminBankAccountsBankaccountidEnable";

/**
 * @link /v2/admin/bank-accounts/:bankAccountId/enable
 */
export async function postV2AdminBankAccountsBankaccountidEnable(
    bankAccountId: PostV2AdminBankAccountsBankaccountidEnablePathParams["bankAccountId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminBankAccountsBankaccountidEnableMutationResponse>["data"]
> {
    const res =
        await client<PostV2AdminBankAccountsBankaccountidEnableMutationResponse>(
            {
                method: "post",
                url: `/v2/admin/bank-accounts/${bankAccountId}/enable`,
                ...options,
            }
        );
    return res.data;
}
