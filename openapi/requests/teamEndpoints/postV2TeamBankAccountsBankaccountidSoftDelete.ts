import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2TeamBankAccountsBankaccountidSoftDeleteMutationResponse,
    PostV2TeamBankAccountsBankaccountidSoftDeletePathParams,
} from "../../types/teamEndpoints/PostV2TeamBankAccountsBankaccountidSoftDelete";

/**
 * @link /v2/team/bank-accounts/:bankAccountId/soft-delete
 */
export async function postV2TeamBankAccountsBankaccountidSoftDelete(
    bankAccountId: PostV2TeamBankAccountsBankaccountidSoftDeletePathParams["bankAccountId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2TeamBankAccountsBankaccountidSoftDeleteMutationResponse>["data"]
> {
    const res =
        await client<PostV2TeamBankAccountsBankaccountidSoftDeleteMutationResponse>(
            {
                method: "post",
                url: `/v2/team/bank-accounts/${bankAccountId}/soft-delete`,
                ...options,
            }
        );
    return res.data;
}
