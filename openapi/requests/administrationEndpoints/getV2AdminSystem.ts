import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type { GetV2AdminSystemQueryResponse } from "../../types/administrationEndpoints/GetV2AdminSystem";

/**
 * @link /v2/admin/system
 */
export async function getV2AdminSystem(
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminSystemQueryResponse>["data"]> {
    const res = await client<GetV2AdminSystemQueryResponse>({
        method: "get",
        url: `/v2/admin/system`,
        ...options,
    });
    return res.data;
}
