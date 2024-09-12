import type { CardDto } from "../CardDto";
import type { CreateCardRequestBody } from "../CreateCardRequestBody";

/**
 * @description OK
 */
export type PostV2TeamCards200 = CardDto;
export type PostV2TeamCardsMutationRequest = CreateCardRequestBody;
/**
 * @description OK
 */
export type PostV2TeamCardsMutationResponse = CardDto;
export type PostV2TeamCardsMutation = {
    Response: PostV2TeamCardsMutationResponse;
    Request: PostV2TeamCardsMutationRequest;
};
