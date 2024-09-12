import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PatchV2AdminBanksBankidMutationRequest,
    PatchV2AdminBanksBankidMutationResponse,
    PatchV2AdminBanksBankidPathParams,
} from "../../types/administrationEndpoints/PatchV2AdminBanksBankid";

/**
 * @link /v2/admin/banks/:bankId
 */
export async function patchV2AdminBanksBankid(
    bankId: PatchV2AdminBanksBankidPathParams["bankId"],
    data?: PatchV2AdminBanksBankidMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PatchV2AdminBanksBankidMutationResponse>["data"]> {
    const res = await client<
        PatchV2AdminBanksBankidMutationResponse,
        PatchV2AdminBanksBankidMutationRequest
    >({ method: "patch", url: `/v2/admin/banks/${bankId}`, data, ...options });
    return res.data;
}
