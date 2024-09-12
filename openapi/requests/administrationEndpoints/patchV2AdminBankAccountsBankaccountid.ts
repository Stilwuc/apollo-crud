import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PatchV2AdminBankAccountsBankaccountidMutationRequest,
    PatchV2AdminBankAccountsBankaccountidMutationResponse,
    PatchV2AdminBankAccountsBankaccountidPathParams,
} from "../../types/administrationEndpoints/PatchV2AdminBankAccountsBankaccountid";

/**
 * @link /v2/admin/bank-accounts/:bankAccountId
 */
export async function patchV2AdminBankAccountsBankaccountid(
    bankAccountId: PatchV2AdminBankAccountsBankaccountidPathParams["bankAccountId"],
    data?: PatchV2AdminBankAccountsBankaccountidMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PatchV2AdminBankAccountsBankaccountidMutationResponse>["data"]
> {
    const res = await client<
        PatchV2AdminBankAccountsBankaccountidMutationResponse,
        PatchV2AdminBankAccountsBankaccountidMutationRequest
    >({
        method: "patch",
        url: `/v2/admin/bank-accounts/${bankAccountId}`,
        data,
        ...options,
    });
    return res.data;
}
