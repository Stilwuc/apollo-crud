import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    DeleteV2AdminBankAccountsBankaccountidMutationResponse,
    DeleteV2AdminBankAccountsBankaccountidPathParams,
} from "../../types/administrationEndpoints/DeleteV2AdminBankAccountsBankaccountid";

/**
 * @link /v2/admin/bank-accounts/:bankAccountId
 */
export async function deleteV2AdminBankAccountsBankaccountid(
    bankAccountId: DeleteV2AdminBankAccountsBankaccountidPathParams["bankAccountId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<DeleteV2AdminBankAccountsBankaccountidMutationResponse>["data"]
> {
    const res =
        await client<DeleteV2AdminBankAccountsBankaccountidMutationResponse>({
            method: "delete",
            url: `/v2/admin/bank-accounts/${bankAccountId}`,
            ...options,
        });
    return res.data;
}
