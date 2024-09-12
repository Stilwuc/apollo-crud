import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type { GetV2AdminCurrenciesQueryResponse } from "../../types/administrationEndpoints/GetV2AdminCurrencies";

/**
 * @link /v2/admin/currencies
 */
export async function getV2AdminCurrencies(
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminCurrenciesQueryResponse>["data"]> {
    const res = await client<GetV2AdminCurrenciesQueryResponse>({
        method: "get",
        url: `/v2/admin/currencies`,
        ...options,
    });
    return res.data;
}
