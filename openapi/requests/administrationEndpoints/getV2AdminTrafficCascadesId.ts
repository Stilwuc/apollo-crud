import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminTrafficCascadesIdQueryResponse,
    GetV2AdminTrafficCascadesIdPathParams,
} from "../../types/administrationEndpoints/GetV2AdminTrafficCascadesId";

/**
 * @link /v2/admin/traffic-cascades/:id
 */
export async function getV2AdminTrafficCascadesId(
    id: GetV2AdminTrafficCascadesIdPathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminTrafficCascadesIdQueryResponse>["data"]> {
    const res = await client<GetV2AdminTrafficCascadesIdQueryResponse>({
        method: "get",
        url: `/v2/admin/traffic-cascades/${id}`,
        ...options,
    });
    return res.data;
}
