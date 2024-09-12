import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminTransactionCallbacksIdResendMutationResponse,
    PostV2AdminTransactionCallbacksIdResendPathParams,
} from "../../types/administrationEndpoints/PostV2AdminTransactionCallbacksIdResend";

/**
 * @link /v2/admin/transaction-callbacks/:id/resend
 */
export async function postV2AdminTransactionCallbacksIdResend(
    id: PostV2AdminTransactionCallbacksIdResendPathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminTransactionCallbacksIdResendMutationResponse>["data"]
> {
    const res =
        await client<PostV2AdminTransactionCallbacksIdResendMutationResponse>({
            method: "post",
            url: `/v2/admin/transaction-callbacks/${id}/resend`,
            ...options,
        });
    return res.data;
}
