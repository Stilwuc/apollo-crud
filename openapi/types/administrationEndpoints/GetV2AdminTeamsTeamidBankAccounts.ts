import type { TeamBankAccountDtoPagedResponseWithTotalCount } from "../TeamBankAccountDtoPagedResponseWithTotalCount";

export type GetV2AdminTeamsTeamidBankAccountsPathParams = {
    /**
     * @type string, uuid
     */
    teamId: string;
};
export type GetV2AdminTeamsTeamidBankAccountsQueryParams = {
    /**
     * @type integer | undefined, int32
     */
    pageNumber?: number;
    /**
     * @type integer | undefined, int32
     */
    pageSize?: number;
};
/**
 * @description OK
 */
export type GetV2AdminTeamsTeamidBankAccounts200 =
    TeamBankAccountDtoPagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2AdminTeamsTeamidBankAccountsQueryResponse =
    TeamBankAccountDtoPagedResponseWithTotalCount;
export type GetV2AdminTeamsTeamidBankAccountsQuery = {
    Response: GetV2AdminTeamsTeamidBankAccountsQueryResponse;
    PathParams: GetV2AdminTeamsTeamidBankAccountsPathParams;
    QueryParams: GetV2AdminTeamsTeamidBankAccountsQueryParams;
};
