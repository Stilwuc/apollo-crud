import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2SupportManualConfirmMutationRequest,
    PostV2SupportManualConfirmMutationResponse,
} from "../../types/supportEndpoints/PostV2SupportManualConfirm";

/**
 * @link /v2/support/manual-confirm
 */
export async function postV2SupportManualConfirm(
    data?: PostV2SupportManualConfirmMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PostV2SupportManualConfirmMutationResponse>["data"]> {
    const res = await client<
        PostV2SupportManualConfirmMutationResponse,
        PostV2SupportManualConfirmMutationRequest
    >({ method: "post", url: `/v2/support/manual-confirm`, data, ...options });
    return res.data;
}
