import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type { GetV2AdminTransactionsIdMessagesQueryResponse } from "../../types/administrationEndpoints/GetV2AdminTransactionsIdMessages";

/**
 * @link /v2/admin/transactions/:id/messages
 */
export async function getV2AdminTransactionsIdMessages(
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminTransactionsIdMessagesQueryResponse>["data"]
> {
    const res = await client<GetV2AdminTransactionsIdMessagesQueryResponse>({
        method: "get",
        url: `/v2/admin/transactions/${id}/messages`,
        ...options,
    });
    return res.data;
}
