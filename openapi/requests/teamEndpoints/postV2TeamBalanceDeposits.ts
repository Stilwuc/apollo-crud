import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2TeamBalanceDepositsMutationRequest,
    PostV2TeamBalanceDepositsMutationResponse,
} from "../../types/teamEndpoints/PostV2TeamBalanceDeposits";

/**
 * @link /v2/team/balance-deposits
 */
export async function postV2TeamBalanceDeposits(
    data?: PostV2TeamBalanceDepositsMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PostV2TeamBalanceDepositsMutationResponse>["data"]> {
    const res = await client<
        PostV2TeamBalanceDepositsMutationResponse,
        PostV2TeamBalanceDepositsMutationRequest
    >({ method: "post", url: `/v2/team/balance-deposits`, data, ...options });
    return res.data;
}
