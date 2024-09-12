import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    GetV2AdminCardsConversionQueryResponse,
    GetV2AdminCardsConversionQueryParams,
} from "../../types/administrationEndpoints/GetV2AdminCardsConversion";

/**
 * @link /v2/admin/cards/conversion
 */
export async function getV2AdminCardsConversion(
    params?: GetV2AdminCardsConversionQueryParams,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<GetV2AdminCardsConversionQueryResponse>["data"]> {
    const res = await client<GetV2AdminCardsConversionQueryResponse>({
        method: "get",
        url: `/v2/admin/cards/conversion`,
        params,
        ...options,
    });
    return res.data;
}
