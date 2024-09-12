import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2TeamBalanceDepositsIdCancelMutationResponse,
    PostV2TeamBalanceDepositsIdCancelPathParams,
} from "../../types/teamEndpoints/PostV2TeamBalanceDepositsIdCancel";

/**
 * @link /v2/team/balance-deposits/:id/cancel
 */
export async function postV2TeamBalanceDepositsIdCancel(
    id: PostV2TeamBalanceDepositsIdCancelPathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2TeamBalanceDepositsIdCancelMutationResponse>["data"]
> {
    const res = await client<PostV2TeamBalanceDepositsIdCancelMutationResponse>(
        {
            method: "post",
            url: `/v2/team/balance-deposits/${id}/cancel`,
            ...options,
        }
    );
    return res.data;
}
