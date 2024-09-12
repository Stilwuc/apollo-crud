import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminMerchantDepositsMutationRequest,
    PostV2AdminMerchantDepositsMutationResponse,
} from "../../types/administrationEndpoints/PostV2AdminMerchantDeposits";

/**
 * @link /v2/admin/merchant-deposits
 */
export async function postV2AdminMerchantDeposits(
    data?: PostV2AdminMerchantDepositsMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminMerchantDepositsMutationResponse>["data"]
> {
    const res = await client<
        PostV2AdminMerchantDepositsMutationResponse,
        PostV2AdminMerchantDepositsMutationRequest
    >({ method: "post", url: `/v2/admin/merchant-deposits`, data, ...options });
    return res.data;
}
