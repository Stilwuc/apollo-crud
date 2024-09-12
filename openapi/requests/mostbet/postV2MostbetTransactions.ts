import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2MostbetTransactionsMutationRequest,
    PostV2MostbetTransactionsMutationResponse,
} from "../../types/mostbet/PostV2MostbetTransactions";

/**
 * @link /v2/mostbet/transactions
 */
export async function postV2MostbetTransactions(
    data?: PostV2MostbetTransactionsMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PostV2MostbetTransactionsMutationResponse>["data"]> {
    const res = await client<
        PostV2MostbetTransactionsMutationResponse,
        PostV2MostbetTransactionsMutationRequest
    >({ method: "post", url: `/v2/mostbet/transactions`, data, ...options });
    return res.data;
}
