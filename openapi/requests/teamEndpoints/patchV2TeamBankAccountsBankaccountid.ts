import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PatchV2TeamBankAccountsBankaccountidMutationRequest,
    PatchV2TeamBankAccountsBankaccountidMutationResponse,
    PatchV2TeamBankAccountsBankaccountidPathParams,
} from "../../types/teamEndpoints/PatchV2TeamBankAccountsBankaccountid";

/**
 * @link /v2/team/bank-accounts/:bankAccountId
 */
export async function patchV2TeamBankAccountsBankaccountid(
    bankAccountId: PatchV2TeamBankAccountsBankaccountidPathParams["bankAccountId"],
    data?: PatchV2TeamBankAccountsBankaccountidMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PatchV2TeamBankAccountsBankaccountidMutationResponse>["data"]
> {
    const res = await client<
        PatchV2TeamBankAccountsBankaccountidMutationResponse,
        PatchV2TeamBankAccountsBankaccountidMutationRequest
    >({
        method: "patch",
        url: `/v2/team/bank-accounts/${bankAccountId}`,
        data,
        ...options,
    });
    return res.data;
}
