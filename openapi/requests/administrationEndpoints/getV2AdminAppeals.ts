import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminAppealsQueryResponse,
    GetV2AdminAppealsQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminAppeals";

/**
 * @link /v2/admin/appeals
 */
export async function getV2AdminAppeals(
    params?: GetV2AdminAppealsQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminAppealsQueryResponse>["data"]> {
    const res = await client<GetV2AdminAppealsQueryResponse>({
        method: "get",
        url: `/v2/admin/appeals`,
        params,
        ...options,
    });
    return res.data;
}
