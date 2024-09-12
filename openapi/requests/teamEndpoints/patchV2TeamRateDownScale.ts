import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PatchV2TeamRateDownScaleMutationRequest,
    PatchV2TeamRateDownScaleMutationResponse,
} from "../../types/teamEndpoints/PatchV2TeamRateDownScale";

/**
 * @link /v2/team/rate-down-scale
 */
export async function patchV2TeamRateDownScale(
    data?: PatchV2TeamRateDownScaleMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PatchV2TeamRateDownScaleMutationResponse>["data"]> {
    const res = await client<
        PatchV2TeamRateDownScaleMutationResponse,
        PatchV2TeamRateDownScaleMutationRequest
    >({ method: "patch", url: `/v2/team/rate-down-scale`, data, ...options });
    return res.data;
}
