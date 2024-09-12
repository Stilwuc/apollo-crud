import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2MerchantAppealsIdCancelMutationResponse,
    PostV2MerchantAppealsIdCancelPathParams,
} from "../../types/merchantEndpoints/PostV2MerchantAppealsIdCancel";

/**
 * @link /v2/merchant/appeals/:id/cancel
 */
export async function postV2MerchantAppealsIdCancel(
    id: PostV2MerchantAppealsIdCancelPathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2MerchantAppealsIdCancelMutationResponse>["data"]
> {
    const res = await client<PostV2MerchantAppealsIdCancelMutationResponse>({
        method: "post",
        url: `/v2/merchant/appeals/${id}/cancel`,
        ...options,
    });
    return res.data;
}
