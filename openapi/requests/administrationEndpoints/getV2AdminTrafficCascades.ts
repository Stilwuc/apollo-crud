import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminTrafficCascadesQueryResponse,
    GetV2AdminTrafficCascadesQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminTrafficCascades";

/**
 * @link /v2/admin/traffic-cascades
 */
export async function getV2AdminTrafficCascades(
    params?: GetV2AdminTrafficCascadesQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminTrafficCascadesQueryResponse>["data"]> {
    const res = await client<GetV2AdminTrafficCascadesQueryResponse>({
        method: "get",
        url: `/v2/admin/traffic-cascades`,
        params,
        ...options,
    });
    return res.data;
}
