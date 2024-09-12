import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PatchV2AdminPaymentProvidersIdMutationRequest,
    PatchV2AdminPaymentProvidersIdMutationResponse,
    PatchV2AdminPaymentProvidersIdPathParams,
} from "../../types/administrationEndpoints/PatchV2AdminPaymentProvidersId";

/**
 * @link /v2/admin/payment-providers/:id
 */
export async function patchV2AdminPaymentProvidersId(
    id: PatchV2AdminPaymentProvidersIdPathParams["id"],
    data?: PatchV2AdminPaymentProvidersIdMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PatchV2AdminPaymentProvidersIdMutationResponse>["data"]
> {
    const res = await client<
        PatchV2AdminPaymentProvidersIdMutationResponse,
        PatchV2AdminPaymentProvidersIdMutationRequest
    >({
        method: "patch",
        url: `/v2/admin/payment-providers/${id}`,
        data,
        ...options,
    });
    return res.data;
}
