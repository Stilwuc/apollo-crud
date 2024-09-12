import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminTransactionsIdChangesQueryResponse,
    GetV2AdminTransactionsIdChangesPathParams,
} from "../../types/administrationEndpoints/GetV2AdminTransactionsIdChanges";

/**
 * @link /v2/admin/transactions/:id/changes
 */
export async function getV2AdminTransactionsIdChanges(
    id: GetV2AdminTransactionsIdChangesPathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminTransactionsIdChangesQueryResponse>["data"]
> {
    const res = await client<GetV2AdminTransactionsIdChangesQueryResponse>({
        method: "get",
        url: `/v2/admin/transactions/${id}/changes`,
        ...options,
    });
    return res.data;
}
