import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridQueryResponse,
    GetV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridPathParams,
} from "../../types/administrationEndpoints/GetV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentproviderid";

/**
 * @link /v2/admin/traffic-cascades/:trafficCascadeId/payment-providers/:paymentProviderId
 */
export async function getV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentproviderid(
    trafficCascadeId: GetV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridPathParams["trafficCascadeId"],
    paymentProviderId: GetV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridPathParams["paymentProviderId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridQueryResponse>["data"]
> {
    const res =
        await client<GetV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPaymentprovideridQueryResponse>(
            {
                method: "get",
                url: `/v2/admin/traffic-cascades/${trafficCascadeId}/payment-providers/${paymentProviderId}`,
                ...options,
            }
        );
    return res.data;
}
