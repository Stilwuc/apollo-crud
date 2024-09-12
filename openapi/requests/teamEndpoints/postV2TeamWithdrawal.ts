import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2TeamWithdrawalMutationRequest,
    PostV2TeamWithdrawalMutationResponse,
} from "../../types/teamEndpoints/PostV2TeamWithdrawal";

/**
 * @link /v2/team/withdrawal
 */
export async function postV2TeamWithdrawal(
    data?: PostV2TeamWithdrawalMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PostV2TeamWithdrawalMutationResponse>["data"]> {
    const res = await client<
        PostV2TeamWithdrawalMutationResponse,
        PostV2TeamWithdrawalMutationRequest
    >({ method: "post", url: `/v2/team/withdrawal`, data, ...options });
    return res.data;
}
