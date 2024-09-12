import type { SbpDepositRequisiteResponse } from "../SbpDepositRequisiteResponse";
import type { CreateSbpTransactionMerchantRequestBody } from "../CreateSbpTransactionMerchantRequestBody";

/**
 * @description OK
 */
export type PostV2MerchantTransactionsSbp200 = SbpDepositRequisiteResponse;
export type PostV2MerchantTransactionsSbpMutationRequest =
    CreateSbpTransactionMerchantRequestBody;
/**
 * @description OK
 */
export type PostV2MerchantTransactionsSbpMutationResponse =
    SbpDepositRequisiteResponse;
export type PostV2MerchantTransactionsSbpMutation = {
    Response: PostV2MerchantTransactionsSbpMutationResponse;
    Request: PostV2MerchantTransactionsSbpMutationRequest;
};
