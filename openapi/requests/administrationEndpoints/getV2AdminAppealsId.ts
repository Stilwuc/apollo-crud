import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminAppealsIdQueryResponse,
    GetV2AdminAppealsIdPathParams,
} from "../../types/administrationEndpoints/GetV2AdminAppealsId";

/**
 * @link /v2/admin/appeals/:id
 */
export async function getV2AdminAppealsId(
    id: GetV2AdminAppealsIdPathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminAppealsIdQueryResponse>["data"]> {
    const res = await client<GetV2AdminAppealsIdQueryResponse>({
        method: "get",
        url: `/v2/admin/appeals/${id}`,
        ...options,
    });
    return res.data;
}
