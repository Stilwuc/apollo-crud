import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminTransactionCallbacksQueryResponse,
    GetV2AdminTransactionCallbacksQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminTransactionCallbacks";

/**
 * @link /v2/admin/transaction-callbacks
 */
export async function getV2AdminTransactionCallbacks(
    params?: GetV2AdminTransactionCallbacksQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminTransactionCallbacksQueryResponse>["data"]
> {
    const res = await client<GetV2AdminTransactionCallbacksQueryResponse>({
        method: "get",
        url: `/v2/admin/transaction-callbacks`,
        params,
        ...options,
    });
    return res.data;
}
