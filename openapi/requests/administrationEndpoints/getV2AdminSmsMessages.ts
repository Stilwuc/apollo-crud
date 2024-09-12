import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminSmsMessagesQueryResponse,
    GetV2AdminSmsMessagesQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminSmsMessages";

/**
 * @link /v2/admin/sms-messages
 */
export async function getV2AdminSmsMessages(
    params?: GetV2AdminSmsMessagesQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminSmsMessagesQueryResponse>["data"]> {
    const res = await client<GetV2AdminSmsMessagesQueryResponse>({
        method: "get",
        url: `/v2/admin/sms-messages`,
        params,
        ...options,
    });
    return res.data;
}
