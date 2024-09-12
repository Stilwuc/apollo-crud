import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminSmsMessagesIdQueryResponse,
    GetV2AdminSmsMessagesIdPathParams,
} from "../../types/administrationEndpoints/GetV2AdminSmsMessagesId";

/**
 * @link /v2/admin/sms-messages/:id
 */
export async function getV2AdminSmsMessagesId(
    id: GetV2AdminSmsMessagesIdPathParams["id"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminSmsMessagesIdQueryResponse>["data"]> {
    const res = await client<GetV2AdminSmsMessagesIdQueryResponse>({
        method: "get",
        url: `/v2/admin/sms-messages/${id}`,
        ...options,
    });
    return res.data;
}
