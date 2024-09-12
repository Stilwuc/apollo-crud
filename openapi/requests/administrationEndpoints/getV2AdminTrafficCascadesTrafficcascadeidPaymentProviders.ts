import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersQueryResponse,
    GetV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPathParams,
    GetV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminTrafficCascadesTrafficcascadeidPaymentProviders";

/**
 * @link /v2/admin/traffic-cascades/:trafficCascadeId/payment-providers
 */
export async function getV2AdminTrafficCascadesTrafficcascadeidPaymentProviders(
    trafficCascadeId: GetV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersPathParams["trafficCascadeId"],
    params?: GetV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersQueryResponse>["data"]
> {
    const res =
        await client<GetV2AdminTrafficCascadesTrafficcascadeidPaymentProvidersQueryResponse>(
            {
                method: "get",
                url: `/v2/admin/traffic-cascades/${trafficCascadeId}/payment-providers`,
                params,
                ...options,
            }
        );
    return res.data;
}
