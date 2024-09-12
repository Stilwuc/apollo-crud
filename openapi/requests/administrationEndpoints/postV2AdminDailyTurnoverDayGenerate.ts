import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PostV2AdminDailyTurnoverDayGenerateMutationResponse,
    PostV2AdminDailyTurnoverDayGeneratePathParams,
} from "../../types/administrationEndpoints/PostV2AdminDailyTurnoverDayGenerate";

/**
 * @link /v2/admin/daily-turnover/:day/generate
 */
export async function postV2AdminDailyTurnoverDayGenerate(
    day: PostV2AdminDailyTurnoverDayGeneratePathParams["day"],
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<
    ResponseConfig<PostV2AdminDailyTurnoverDayGenerateMutationResponse>["data"]
> {
    const res =
        await client<PostV2AdminDailyTurnoverDayGenerateMutationResponse>({
            method: "post",
            url: `/v2/admin/daily-turnover/${day}/generate`,
            ...options,
        });
    return res.data;
}
