import client from "../../../client";
import type { ResponseConfig } from "../../../client";
import type {
    PatchV2TeamCardsCardidMutationRequest,
    PatchV2TeamCardsCardidMutationResponse,
    PatchV2TeamCardsCardidPathParams,
} from "../../types/teamEndpoints/PatchV2TeamCardsCardid";

/**
 * @link /v2/team/cards/:cardId
 */
export async function patchV2TeamCardsCardid(
    cardId: PatchV2TeamCardsCardidPathParams["cardId"],
    data?: PatchV2TeamCardsCardidMutationRequest,
    options: Partial<Parameters<typeof client>[0]> = {}
): Promise<ResponseConfig<PatchV2TeamCardsCardidMutationResponse>["data"]> {
    const res = await client<
        PatchV2TeamCardsCardidMutationResponse,
        PatchV2TeamCardsCardidMutationRequest
    >({ method: "patch", url: `/v2/team/cards/${cardId}`, data, ...options });
    return res.data;
}
