import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminMerchantsIdRestoreMutationResponse,
    PostV2AdminMerchantsIdRestorePathParams,
} from "../../types/administrationEndpoints/PostV2AdminMerchantsIdRestore";

/**
 * @link /v2/admin/merchants/:id/restore
 */
export async function postV2AdminMerchantsIdRestore(
    id: PostV2AdminMerchantsIdRestorePathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminMerchantsIdRestoreMutationResponse>["data"]
> {
    const res = await client<PostV2AdminMerchantsIdRestoreMutationResponse>({
        method: "post",
        url: `/v2/admin/merchants/${id}/restore`,
        ...options,
    });
    return res.data;
}
