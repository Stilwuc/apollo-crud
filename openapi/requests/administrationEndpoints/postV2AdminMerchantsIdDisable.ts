import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminMerchantsIdDisableMutationResponse,
    PostV2AdminMerchantsIdDisablePathParams,
} from "../../types/administrationEndpoints/PostV2AdminMerchantsIdDisable";

/**
 * @link /v2/admin/merchants/:id/disable
 */
export async function postV2AdminMerchantsIdDisable(
    id: PostV2AdminMerchantsIdDisablePathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminMerchantsIdDisableMutationResponse>["data"]
> {
    const res = await client<PostV2AdminMerchantsIdDisableMutationResponse>({
        method: "post",
        url: `/v2/admin/merchants/${id}/disable`,
        ...options,
    });
    return res.data;
}
