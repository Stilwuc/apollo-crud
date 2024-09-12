import type { ChangeInsuranceBalanceRequest } from "../ChangeInsuranceBalanceRequest";

export type PostV2AdminTeamsTeamidAddInsuranceBalancePathParams = {
    /**
     * @type string, uuid
     */
    teamId: string;
};
/**
 * @description OK
 */
export type PostV2AdminTeamsTeamidAddInsuranceBalance200 = unknown;
export type PostV2AdminTeamsTeamidAddInsuranceBalanceMutationRequest =
    ChangeInsuranceBalanceRequest;
export type PostV2AdminTeamsTeamidAddInsuranceBalanceMutationResponse = unknown;
export type PostV2AdminTeamsTeamidAddInsuranceBalanceMutation = {
    Response: PostV2AdminTeamsTeamidAddInsuranceBalanceMutationResponse;
    Request: PostV2AdminTeamsTeamidAddInsuranceBalanceMutationRequest;
    PathParams: PostV2AdminTeamsTeamidAddInsuranceBalancePathParams;
};
