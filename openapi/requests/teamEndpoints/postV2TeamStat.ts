import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2TeamStatMutationRequest,
    PostV2TeamStatMutationResponse,
} from "../../types/teamEndpoints/PostV2TeamStat";

/**
 * @link /v2/team/stat
 */
export async function postV2TeamStat(
    data?: PostV2TeamStatMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PostV2TeamStatMutationResponse>["data"]> {
    const res = await client<
        PostV2TeamStatMutationResponse,
        PostV2TeamStatMutationRequest
    >({ method: "post", url: `/v2/team/stat`, data, ...options });
    return res.data;
}
