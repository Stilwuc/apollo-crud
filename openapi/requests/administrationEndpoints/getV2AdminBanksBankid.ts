import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminBanksBankidQueryResponse,
    GetV2AdminBanksBankidPathParams,
} from "../../types/administrationEndpoints/GetV2AdminBanksBankid";

/**
 * @link /v2/admin/banks/:bankId
 */
export async function getV2AdminBanksBankid(
    bankId: GetV2AdminBanksBankidPathParams["bankId"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminBanksBankidQueryResponse>["data"]> {
    const res = await client<GetV2AdminBanksBankidQueryResponse>({
        method: "get",
        url: `/v2/admin/banks/${bankId}`,
        ...options,
    });
    return res.data;
}
