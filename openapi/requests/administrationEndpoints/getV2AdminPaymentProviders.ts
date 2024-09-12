import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminPaymentProvidersQueryResponse,
    GetV2AdminPaymentProvidersQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminPaymentProviders";

/**
 * @link /v2/admin/payment-providers
 */
export async function getV2AdminPaymentProviders(
    params?: GetV2AdminPaymentProvidersQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminPaymentProvidersQueryResponse>["data"]> {
    const res = await client<GetV2AdminPaymentProvidersQueryResponse>({
        method: "get",
        url: `/v2/admin/payment-providers`,
        params,
        ...options,
    });
    return res.data;
}
