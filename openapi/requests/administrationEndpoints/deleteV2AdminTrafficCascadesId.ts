import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    DeleteV2AdminTrafficCascadesIdMutationResponse,
    DeleteV2AdminTrafficCascadesIdPathParams,
} from "../../types/administrationEndpoints/DeleteV2AdminTrafficCascadesId";

/**
 * @link /v2/admin/traffic-cascades/:id
 */
export async function deleteV2AdminTrafficCascadesId(
    id: DeleteV2AdminTrafficCascadesIdPathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<DeleteV2AdminTrafficCascadesIdMutationResponse>["data"]
> {
    const res = await client<DeleteV2AdminTrafficCascadesIdMutationResponse>({
        method: "delete",
        url: `/v2/admin/traffic-cascades/${id}`,
        ...options,
    });
    return res.data;
}
