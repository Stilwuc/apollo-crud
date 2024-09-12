import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2TeamBankAccountsMutationRequest,
    PostV2TeamBankAccountsMutationResponse,
} from "../../types/teamEndpoints/PostV2TeamBankAccounts";

/**
 * @link /v2/team/bank-accounts
 */
export async function postV2TeamBankAccounts(
    data?: PostV2TeamBankAccountsMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PostV2TeamBankAccountsMutationResponse>["data"]> {
    const res = await client<
        PostV2TeamBankAccountsMutationResponse,
        PostV2TeamBankAccountsMutationRequest
    >({ method: "post", url: `/v2/team/bank-accounts`, data, ...options });
    return res.data;
}
