import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminMerchantsMerchantidStatMutationRequest,
    PostV2AdminMerchantsMerchantidStatMutationResponse,
    PostV2AdminMerchantsMerchantidStatPathParams,
} from "../../types/administrationEndpoints/PostV2AdminMerchantsMerchantidStat";

/**
 * @link /v2/admin/merchants/:merchantId/stat
 */
export async function postV2AdminMerchantsMerchantidStat(
    merchantId: PostV2AdminMerchantsMerchantidStatPathParams["merchantId"],
    data?: PostV2AdminMerchantsMerchantidStatMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminMerchantsMerchantidStatMutationResponse>["data"]
> {
    const res = await client<
        PostV2AdminMerchantsMerchantidStatMutationResponse,
        PostV2AdminMerchantsMerchantidStatMutationRequest
    >({
        method: "post",
        url: `/v2/admin/merchants/${merchantId}/stat`,
        data,
        ...options,
    });
    return res.data;
}
