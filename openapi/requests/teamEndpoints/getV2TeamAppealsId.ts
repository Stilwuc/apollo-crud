import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2TeamAppealsIdQueryResponse,
    GetV2TeamAppealsIdPathParams,
} from "../../types/teamEndpoints/GetV2TeamAppealsId";

/**
 * @link /v2/team/appeals/:id
 */
export async function getV2TeamAppealsId(
    id: GetV2TeamAppealsIdPathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2TeamAppealsIdQueryResponse>["data"]> {
    const res = await client<GetV2TeamAppealsIdQueryResponse>({
        method: "get",
        url: `/v2/team/appeals/${id}`,
        ...options,
    });
    return res.data;
}
