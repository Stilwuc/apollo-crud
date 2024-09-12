import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2TeamInsuranceBalanceWithdrawalMutationRequest,
    PostV2TeamInsuranceBalanceWithdrawalMutationResponse,
} from "../../types/teamEndpoints/PostV2TeamInsuranceBalanceWithdrawal";

/**
 * @link /v2/team/insurance-balance-withdrawal
 */
export async function postV2TeamInsuranceBalanceWithdrawal(
    data?: PostV2TeamInsuranceBalanceWithdrawalMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2TeamInsuranceBalanceWithdrawalMutationResponse>["data"]
> {
    const res = await client<
        PostV2TeamInsuranceBalanceWithdrawalMutationResponse,
        PostV2TeamInsuranceBalanceWithdrawalMutationRequest
    >({
        method: "post",
        url: `/v2/team/insurance-balance-withdrawal`,
        data,
        ...options,
    });
    return res.data;
}
