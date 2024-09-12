import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminMerchantDepositsIdCancelMutationResponse,
    PostV2AdminMerchantDepositsIdCancelPathParams,
} from "../../types/administrationEndpoints/PostV2AdminMerchantDepositsIdCancel";

/**
 * @link /v2/admin/merchant-deposits/:id/cancel
 */
export async function postV2AdminMerchantDepositsIdCancel(
    id: PostV2AdminMerchantDepositsIdCancelPathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminMerchantDepositsIdCancelMutationResponse>["data"]
> {
    const res =
        await client<PostV2AdminMerchantDepositsIdCancelMutationResponse>({
            method: "post",
            url: `/v2/admin/merchant-deposits/${id}/cancel`,
            ...options,
        });
    return res.data;
}
