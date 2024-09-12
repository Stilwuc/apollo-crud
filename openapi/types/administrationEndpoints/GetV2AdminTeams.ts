import type { TeamDtoPagedResponseWithTotalCount } from "../TeamDtoPagedResponseWithTotalCount";

export type GetV2AdminTeamsQueryParams = {
    /**
     * @type string | undefined, uuid
     */
    id?: string;
    /**
     * @type string | undefined
     */
    name?: string;
    /**
     * @type boolean | undefined
     */
    isEnabled?: boolean;
    /**
     * @type integer | undefined, int32
     */
    pageNumber?: number;
    /**
     * @type integer | undefined, int32
     */
    pageSize?: number;
    /**
     * @type string | undefined
     */
    sortBy?: string;
};
/**
 * @description OK
 */
export type GetV2AdminTeams200 = TeamDtoPagedResponseWithTotalCount;
/**
 * @description OK
 */
export type GetV2AdminTeamsQueryResponse = TeamDtoPagedResponseWithTotalCount;
export type GetV2AdminTeamsQuery = {
    Response: GetV2AdminTeamsQueryResponse;
    QueryParams: GetV2AdminTeamsQueryParams;
};
