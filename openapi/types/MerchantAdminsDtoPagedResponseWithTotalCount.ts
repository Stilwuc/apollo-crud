import type { MerchantAdminsDto } from "./MerchantAdminsDto";

export type MerchantAdminsDtoPagedResponseWithTotalCount = {
    /**
     * @type array | undefined
     */
    items?: MerchantAdminsDto[];
    /**
     * @type integer | undefined, int32
     */
    pageNumber?: number;
    /**
     * @type integer | undefined, int32
     */
    pageSize?: number;
    /**
     * @type integer | undefined, int32
     */
    totalCount?: number;
    /**
     * @type integer | undefined, int32
     */
    readonly pageCount?: number;
};
