import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminTeamsTeamidBankAccountsQueryResponse,
    GetV2AdminTeamsTeamidBankAccountsPathParams,
    GetV2AdminTeamsTeamidBankAccountsQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminTeamsTeamidBankAccounts";

/**
 * @link /v2/admin/teams/:teamId/bank-accounts
 */
export async function getV2AdminTeamsTeamidBankAccounts(
    teamId: GetV2AdminTeamsTeamidBankAccountsPathParams["teamId"],
    params?: GetV2AdminTeamsTeamidBankAccountsQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<GetV2AdminTeamsTeamidBankAccountsQueryResponse>["data"]
> {
    const res = await client<GetV2AdminTeamsTeamidBankAccountsQueryResponse>({
        method: "get",
        url: `/v2/admin/teams/${teamId}/bank-accounts`,
        params,
        ...options,
    });
    return res.data;
}
