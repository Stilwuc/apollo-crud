import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    DeleteV2AdminPaymentProvidersIdMutationResponse,
    DeleteV2AdminPaymentProvidersIdPathParams,
} from "../../types/administrationEndpoints/DeleteV2AdminPaymentProvidersId";

/**
 * @link /v2/admin/payment-providers/:id
 */
export async function deleteV2AdminPaymentProvidersId(
    id: DeleteV2AdminPaymentProvidersIdPathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<DeleteV2AdminPaymentProvidersIdMutationResponse>["data"]
> {
    const res = await client<DeleteV2AdminPaymentProvidersIdMutationResponse>({
        method: "delete",
        url: `/v2/admin/payment-providers/${id}`,
        ...options,
    });
    return res.data;
}
