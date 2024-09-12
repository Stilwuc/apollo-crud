import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminTransactionCallbacksIdQueryResponse,
    GetV2AdminTransactionCallbacksIdPathParams,
} from "../../types/administrationEndpoints/GetV2AdminTransactionCallbacksId";

/**
 * @link /v2/admin/transaction-callbacks/:id
 */
export async function getV2AdminTransactionCallbacksId(
    id: GetV2AdminTransactionCallbacksIdPathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminTransactionCallbacksIdQueryResponse>["data"]
> {
    const res = await client<GetV2AdminTransactionCallbacksIdQueryResponse>({
        method: "get",
        url: `/v2/admin/transaction-callbacks/${id}`,
        ...options,
    });
    return res.data;
}
