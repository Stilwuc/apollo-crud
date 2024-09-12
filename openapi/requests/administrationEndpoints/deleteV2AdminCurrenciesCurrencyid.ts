import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    DeleteV2AdminCurrenciesCurrencyidMutationResponse,
    DeleteV2AdminCurrenciesCurrencyidPathParams,
} from "../../types/administrationEndpoints/DeleteV2AdminCurrenciesCurrencyid";

/**
 * @link /v2/admin/currencies/:currencyId
 */
export async function deleteV2AdminCurrenciesCurrencyid(
    currencyId: DeleteV2AdminCurrenciesCurrencyidPathParams["currencyId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<DeleteV2AdminCurrenciesCurrencyidMutationResponse>["data"]
> {
    const res = await client<DeleteV2AdminCurrenciesCurrencyidMutationResponse>(
        {
            method: "delete",
            url: `/v2/admin/currencies/${currencyId}`,
            ...options,
        }
    );
    return res.data;
}
