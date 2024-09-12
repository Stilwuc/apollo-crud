import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminTransactionsAppealsAppellationidAcceptMutationResponse,
    PostV2AdminTransactionsAppealsAppellationidAcceptPathParams,
} from "../../types/administrationEndpoints/PostV2AdminTransactionsAppealsAppellationidAccept";

/**
 * @link /v2/admin/transactions/appeals/:appellationId/accept
 */
export async function postV2AdminTransactionsAppealsAppellationidAccept(
    appellationId: PostV2AdminTransactionsAppealsAppellationidAcceptPathParams["appellationId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminTransactionsAppealsAppellationidAcceptMutationResponse>["data"]
> {
    const res =
        await client<PostV2AdminTransactionsAppealsAppellationidAcceptMutationResponse>(
            {
                method: "post",
                url: `/v2/admin/transactions/appeals/${appellationId}/accept`,
                ...options,
            }
        );
    return res.data;
}
