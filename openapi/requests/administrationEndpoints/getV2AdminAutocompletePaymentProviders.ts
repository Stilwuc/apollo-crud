import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminAutocompletePaymentProvidersQueryResponse,
    GetV2AdminAutocompletePaymentProvidersQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminAutocompletePaymentProviders";

/**
 * @link /v2/admin/autocomplete/payment-providers
 */
export async function getV2AdminAutocompletePaymentProviders(
    params: GetV2AdminAutocompletePaymentProvidersQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminAutocompletePaymentProvidersQueryResponse>["data"]
> {
    const res =
        await client<GetV2AdminAutocompletePaymentProvidersQueryResponse>({
            method: "get",
            url: `/v2/admin/autocomplete/payment-providers`,
            params,
            ...options,
        });
    return res.data;
}
