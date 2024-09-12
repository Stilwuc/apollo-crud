import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2P2pPaymentsMutationRequest,
    PostV2P2pPaymentsMutationResponse,
} from "../../types/p2PUsdt/PostV2P2pPayments";

/**
 * @link /v2/p2p/payments
 */
export async function postV2P2pPayments(
    data?: PostV2P2pPaymentsMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PostV2P2pPaymentsMutationResponse>["data"]> {
    const res = await client<
        PostV2P2pPaymentsMutationResponse,
        PostV2P2pPaymentsMutationRequest
    >({ method: "post", url: `/v2/p2p/payments`, data, ...options });
    return res.data;
}
