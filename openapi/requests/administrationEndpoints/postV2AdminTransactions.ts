import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminTransactionsMutationRequest,
    PostV2AdminTransactionsMutationResponse,
} from "../../types/administrationEndpoints/PostV2AdminTransactions";

/**
 * @link /v2/admin/transactions
 */
export async function postV2AdminTransactions(
    data?: PostV2AdminTransactionsMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PostV2AdminTransactionsMutationResponse>["data"]> {
    const res = await client<
        PostV2AdminTransactionsMutationResponse,
        PostV2AdminTransactionsMutationRequest
    >({ method: "post", url: `/v2/admin/transactions`, data, ...options });
    return res.data;
}
