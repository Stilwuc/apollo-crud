import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminTeamDepositsMutationRequest,
    PostV2AdminTeamDepositsMutationResponse,
} from "../../types/administrationEndpoints/PostV2AdminTeamDeposits";

/**
 * @link /v2/admin/team-deposits
 */
export async function postV2AdminTeamDeposits(
    data?: PostV2AdminTeamDepositsMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PostV2AdminTeamDepositsMutationResponse>["data"]> {
    const res = await client<
        PostV2AdminTeamDepositsMutationResponse,
        PostV2AdminTeamDepositsMutationRequest
    >({ method: "post", url: `/v2/admin/team-deposits`, data, ...options });
    return res.data;
}
