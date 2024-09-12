import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2TeamCardsMutationRequest,
    PostV2TeamCardsMutationResponse,
} from "../../types/teamEndpoints/PostV2TeamCards";

/**
 * @link /v2/team/cards
 */
export async function postV2TeamCards(
    data?: PostV2TeamCardsMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PostV2TeamCardsMutationResponse>["data"]> {
    const res = await client<
        PostV2TeamCardsMutationResponse,
        PostV2TeamCardsMutationRequest
    >({ method: "post", url: `/v2/team/cards`, data, ...options });
    return res.data;
}
