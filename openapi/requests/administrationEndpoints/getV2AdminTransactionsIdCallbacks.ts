import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminTransactionsIdCallbacksQueryResponse,
    GetV2AdminTransactionsIdCallbacksPathParams,
} from "../../types/administrationEndpoints/GetV2AdminTransactionsIdCallbacks";

/**
 * @link /v2/admin/transactions/:id/callbacks
 */
export async function getV2AdminTransactionsIdCallbacks(
    id: GetV2AdminTransactionsIdCallbacksPathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminTransactionsIdCallbacksQueryResponse>["data"]
> {
    const res = await client<GetV2AdminTransactionsIdCallbacksQueryResponse>({
        method: "get",
        url: `/v2/admin/transactions/${id}/callbacks`,
        ...options,
    });
    return res.data;
}
