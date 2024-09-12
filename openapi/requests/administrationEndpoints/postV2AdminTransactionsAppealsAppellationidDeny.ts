import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminTransactionsAppealsAppellationidDenyMutationResponse,
    PostV2AdminTransactionsAppealsAppellationidDenyPathParams,
} from "../../types/administrationEndpoints/PostV2AdminTransactionsAppealsAppellationidDeny";

/**
 * @link /v2/admin/transactions/appeals/:appellationId/deny
 */
export async function postV2AdminTransactionsAppealsAppellationidDeny(
    appellationId: PostV2AdminTransactionsAppealsAppellationidDenyPathParams["appellationId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminTransactionsAppealsAppellationidDenyMutationResponse>["data"]
> {
    const res =
        await client<PostV2AdminTransactionsAppealsAppellationidDenyMutationResponse>(
            {
                method: "post",
                url: `/v2/admin/transactions/appeals/${appellationId}/deny`,
                ...options,
            }
        );
    return res.data;
}
