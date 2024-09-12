import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type { PostV2TeamEnableMutationResponse } from "../../types/teamEndpoints/PostV2TeamEnable";

/**
 * @link /v2/team/enable
 */
export async function postV2TeamEnable(
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PostV2TeamEnableMutationResponse>["data"]> {
    const res = await client<PostV2TeamEnableMutationResponse>({
        method: "post",
        url: `/v2/team/enable`,
        ...options,
    });
    return res.data;
}
