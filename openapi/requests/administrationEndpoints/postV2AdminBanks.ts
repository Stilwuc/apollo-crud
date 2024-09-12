import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminBanksMutationRequest,
    PostV2AdminBanksMutationResponse,
} from "../../types/administrationEndpoints/PostV2AdminBanks";

/**
 * @link /v2/admin/banks
 */
export async function postV2AdminBanks(
    data?: PostV2AdminBanksMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PostV2AdminBanksMutationResponse>["data"]> {
    const res = await client<
        PostV2AdminBanksMutationResponse,
        PostV2AdminBanksMutationRequest
    >({ method: "post", url: `/v2/admin/banks`, data, ...options });
    return res.data;
}
