import type { ChangeInsuranceBalanceRequest } from "../ChangeInsuranceBalanceRequest";

export type PostV2AdminTeamsTeamidRemoveInsuranceBalancePathParams = {
    /**
     * @type string, uuid
     */
    teamId: string;
};
/**
 * @description OK
 */
export type PostV2AdminTeamsTeamidRemoveInsuranceBalance200 = unknown;
export type PostV2AdminTeamsTeamidRemoveInsuranceBalanceMutationRequest =
    ChangeInsuranceBalanceRequest;
export type PostV2AdminTeamsTeamidRemoveInsuranceBalanceMutationResponse =
    unknown;
export type PostV2AdminTeamsTeamidRemoveInsuranceBalanceMutation = {
    Response: PostV2AdminTeamsTeamidRemoveInsuranceBalanceMutationResponse;
    Request: PostV2AdminTeamsTeamidRemoveInsuranceBalanceMutationRequest;
    PathParams: PostV2AdminTeamsTeamidRemoveInsuranceBalancePathParams;
};
