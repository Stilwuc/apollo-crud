import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type { PostV2TeamDisableMutationResponse } from "../../types/teamEndpoints/PostV2TeamDisable";

/**
 * @link /v2/team/disable
 */
export async function postV2TeamDisable(
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PostV2TeamDisableMutationResponse>["data"]> {
    const res = await client<PostV2TeamDisableMutationResponse>({
        method: "post",
        url: `/v2/team/disable`,
        ...options,
    });
    return res.data;
}
