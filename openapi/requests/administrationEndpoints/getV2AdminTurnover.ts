import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type { GetV2AdminTurnoverQueryResponse } from "../../types/administrationEndpoints/GetV2AdminTurnover";

/**
 * @link /v2/admin/turnover
 */
export async function getV2AdminTurnover(
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminTurnoverQueryResponse>["data"]> {
    const res = await client<GetV2AdminTurnoverQueryResponse>({
        method: "get",
        url: `/v2/admin/turnover`,
        ...options,
    });
    return res.data;
}
