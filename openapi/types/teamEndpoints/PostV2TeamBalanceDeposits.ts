import type { CreateTeamDepositResponseDto } from "../CreateTeamDepositResponseDto";
import type { CreateTeamDepositRequest } from "../CreateTeamDepositRequest";

/**
 * @description OK
 */
export type PostV2TeamBalanceDeposits200 = CreateTeamDepositResponseDto;
export type PostV2TeamBalanceDepositsMutationRequest = CreateTeamDepositRequest;
/**
 * @description OK
 */
export type PostV2TeamBalanceDepositsMutationResponse =
    CreateTeamDepositResponseDto;
export type PostV2TeamBalanceDepositsMutation = {
    Response: PostV2TeamBalanceDepositsMutationResponse;
    Request: PostV2TeamBalanceDepositsMutationRequest;
};
