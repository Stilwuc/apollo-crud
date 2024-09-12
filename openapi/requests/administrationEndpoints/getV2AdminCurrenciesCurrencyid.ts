import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminCurrenciesCurrencyidQueryResponse,
    GetV2AdminCurrenciesCurrencyidPathParams,
} from "../../types/administrationEndpoints/GetV2AdminCurrenciesCurrencyid";

/**
 * @link /v2/admin/currencies/:currencyId
 */
export async function getV2AdminCurrenciesCurrencyid(
    currencyId: GetV2AdminCurrenciesCurrencyidPathParams["currencyId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminCurrenciesCurrencyidQueryResponse>["data"]
> {
    const res = await client<GetV2AdminCurrenciesCurrencyidQueryResponse>({
        method: "get",
        url: `/v2/admin/currencies/${currencyId}`,
        ...options,
    });
    return res.data;
}
