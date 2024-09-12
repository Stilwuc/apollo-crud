import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminPaymentProvidersIdQueryResponse,
    GetV2AdminPaymentProvidersIdPathParams,
} from "../../types/administrationEndpoints/GetV2AdminPaymentProvidersId";

/**
 * @link /v2/admin/payment-providers/:id
 */
export async function getV2AdminPaymentProvidersId(
    id: GetV2AdminPaymentProvidersIdPathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminPaymentProvidersIdQueryResponse>["data"]> {
    const res = await client<GetV2AdminPaymentProvidersIdQueryResponse>({
        method: "get",
        url: `/v2/admin/payment-providers/${id}`,
        ...options,
    });
    return res.data;
}
