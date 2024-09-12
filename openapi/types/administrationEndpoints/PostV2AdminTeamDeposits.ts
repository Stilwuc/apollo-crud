import type { CreateTeamDepositCommandResponse } from "../CreateTeamDepositCommandResponse";
import type { CreateAdminTeamDepositRequest } from "../CreateAdminTeamDepositRequest";

/**
 * @description OK
 */
export type PostV2AdminTeamDeposits200 = CreateTeamDepositCommandResponse;
export type PostV2AdminTeamDepositsMutationRequest =
    CreateAdminTeamDepositRequest;
/**
 * @description OK
 */
export type PostV2AdminTeamDepositsMutationResponse =
    CreateTeamDepositCommandResponse;
export type PostV2AdminTeamDepositsMutation = {
    Response: PostV2AdminTeamDepositsMutationResponse;
    Request: PostV2AdminTeamDepositsMutationRequest;
};
