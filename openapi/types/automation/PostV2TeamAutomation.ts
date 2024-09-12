import type { SmsDto } from "../SmsDto";

export type PostV2TeamAutomationQueryParams = {
    /**
     * @type string
     */
    sign: string;
};
/**
 * @description Success
 */
export type PostV2TeamAutomation200 = SmsDto;
export type PostV2TeamAutomationMutationRequest = SmsDto;
/**
 * @description Success
 */
export type PostV2TeamAutomationMutationResponse = SmsDto;
export type PostV2TeamAutomationMutation = {
    Response: PostV2TeamAutomationMutationResponse;
    Request: PostV2TeamAutomationMutationRequest;
    QueryParams: PostV2TeamAutomationQueryParams;
};
