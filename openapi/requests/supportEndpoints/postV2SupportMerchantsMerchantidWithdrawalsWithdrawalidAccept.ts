import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2SupportMerchantsMerchantidWithdrawalsWithdrawalidAcceptMutationRequest,
    PostV2SupportMerchantsMerchantidWithdrawalsWithdrawalidAcceptMutationResponse,
    PostV2SupportMerchantsMerchantidWithdrawalsWithdrawalidAcceptPathParams,
} from "../../types/supportEndpoints/PostV2SupportMerchantsMerchantidWithdrawalsWithdrawalidAccept";

/**
 * @link /v2/support/merchants/:merchantId/withdrawals/:withdrawalId/accept
 */
export async function postV2SupportMerchantsMerchantidWithdrawalsWithdrawalidAccept(
    merchantId: PostV2SupportMerchantsMerchantidWithdrawalsWithdrawalidAcceptPathParams["merchantId"],
    withdrawalId: PostV2SupportMerchantsMerchantidWithdrawalsWithdrawalidAcceptPathParams["withdrawalId"],
    data?: PostV2SupportMerchantsMerchantidWithdrawalsWithdrawalidAcceptMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2SupportMerchantsMerchantidWithdrawalsWithdrawalidAcceptMutationResponse>["data"]
> {
    const res = await client<
        PostV2SupportMerchantsMerchantidWithdrawalsWithdrawalidAcceptMutationResponse,
        PostV2SupportMerchantsMerchantidWithdrawalsWithdrawalidAcceptMutationRequest
    >({
        method: "post",
        url: `/v2/support/merchants/${merchantId}/withdrawals/${withdrawalId}/accept`,
        data,
        ...options,
    });
    return res.data;
}
