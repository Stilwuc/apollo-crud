import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminTransactionsIdQueryResponse,
    GetV2AdminTransactionsIdPathParams,
} from "../../types/administrationEndpoints/GetV2AdminTransactionsId";

/**
 * @link /v2/admin/transactions/:id
 */
export async function getV2AdminTransactionsId(
    id: GetV2AdminTransactionsIdPathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminTransactionsIdQueryResponse>["data"]> {
    const res = await client<GetV2AdminTransactionsIdQueryResponse>({
        method: "get",
        url: `/v2/admin/transactions/${id}`,
        ...options,
    });
    return res.data;
}
