import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type { GetV2AdminTransactionsIdAppealsQueryResponse } from "../../types/administrationEndpoints/GetV2AdminTransactionsIdAppeals";

/**
 * @link /v2/admin/transactions/:id/appeals
 */
export async function getV2AdminTransactionsIdAppeals(
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminTransactionsIdAppealsQueryResponse>["data"]
> {
    const res = await client<GetV2AdminTransactionsIdAppealsQueryResponse>({
        method: "get",
        url: `/v2/admin/transactions/${id}/appeals`,
        ...options,
    });
    return res.data;
}
