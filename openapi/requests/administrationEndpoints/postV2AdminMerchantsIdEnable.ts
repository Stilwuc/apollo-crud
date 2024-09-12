import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminMerchantsIdEnableMutationResponse,
    PostV2AdminMerchantsIdEnablePathParams,
} from "../../types/administrationEndpoints/PostV2AdminMerchantsIdEnable";

/**
 * @link /v2/admin/merchants/:id/enable
 */
export async function postV2AdminMerchantsIdEnable(
    id: PostV2AdminMerchantsIdEnablePathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminMerchantsIdEnableMutationResponse>["data"]
> {
    const res = await client<PostV2AdminMerchantsIdEnableMutationResponse>({
        method: "post",
        url: `/v2/admin/merchants/${id}/enable`,
        ...options,
    });
    return res.data;
}
