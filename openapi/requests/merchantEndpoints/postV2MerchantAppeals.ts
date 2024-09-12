import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2MerchantAppealsMutationRequest,
    PostV2MerchantAppealsMutationResponse,
} from "../../types/merchantEndpoints/PostV2MerchantAppeals";

/**
 * @link /v2/merchant/appeals
 */
export async function postV2MerchantAppeals(
    data?: PostV2MerchantAppealsMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PostV2MerchantAppealsMutationResponse>["data"]> {
    const res = await client<
        PostV2MerchantAppealsMutationResponse,
        PostV2MerchantAppealsMutationRequest
    >({
        method: "post",
        url: `/v2/merchant/appeals`,
        data,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            ...options.headers,
        },
        ...options,
    });
    return res.data;
}
