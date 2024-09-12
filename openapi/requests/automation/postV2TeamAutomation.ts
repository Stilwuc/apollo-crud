import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2TeamAutomationMutationRequest,
    PostV2TeamAutomationMutationResponse,
    PostV2TeamAutomationQueryParams,
} from "../../types/automation/PostV2TeamAutomation";

/**
 * @link /v2/team/automation
 */
export async function postV2TeamAutomation(
    params: PostV2TeamAutomationQueryParams,
    data?: PostV2TeamAutomationMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PostV2TeamAutomationMutationResponse>["data"]> {
    const res = await client<
        PostV2TeamAutomationMutationResponse,
        PostV2TeamAutomationMutationRequest
    >({ method: "post", url: `/v2/team/automation`, params, data, ...options });
    return res.data;
}
