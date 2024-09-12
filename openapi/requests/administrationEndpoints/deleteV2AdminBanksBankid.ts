import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    DeleteV2AdminBanksBankidMutationResponse,
    DeleteV2AdminBanksBankidPathParams,
} from "../../types/administrationEndpoints/DeleteV2AdminBanksBankid";

/**
 * @link /v2/admin/banks/:bankId
 */
export async function deleteV2AdminBanksBankid(
    bankId: DeleteV2AdminBanksBankidPathParams["bankId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<DeleteV2AdminBanksBankidMutationResponse>["data"]> {
    const res = await client<DeleteV2AdminBanksBankidMutationResponse>({
        method: "delete",
        url: `/v2/admin/banks/${bankId}`,
        ...options,
    });
    return res.data;
}
