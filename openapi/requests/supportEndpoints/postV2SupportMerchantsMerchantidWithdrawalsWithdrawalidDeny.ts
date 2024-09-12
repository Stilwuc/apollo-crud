import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2SupportMerchantsMerchantidWithdrawalsWithdrawalidDenyMutationResponse,
    PostV2SupportMerchantsMerchantidWithdrawalsWithdrawalidDenyPathParams,
} from "../../types/supportEndpoints/PostV2SupportMerchantsMerchantidWithdrawalsWithdrawalidDeny";

/**
 * @link /v2/support/merchants/:merchantId/withdrawals/:withdrawalId/deny
 */
export async function postV2SupportMerchantsMerchantidWithdrawalsWithdrawalidDeny(
    merchantId: PostV2SupportMerchantsMerchantidWithdrawalsWithdrawalidDenyPathParams["merchantId"],
    withdrawalId: PostV2SupportMerchantsMerchantidWithdrawalsWithdrawalidDenyPathParams["withdrawalId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2SupportMerchantsMerchantidWithdrawalsWithdrawalidDenyMutationResponse>["data"]
> {
    const res =
        await client<PostV2SupportMerchantsMerchantidWithdrawalsWithdrawalidDenyMutationResponse>(
            {
                method: "post",
                url: `/v2/support/merchants/${merchantId}/withdrawals/${withdrawalId}/deny`,
                ...options,
            }
        );
    return res.data;
}
