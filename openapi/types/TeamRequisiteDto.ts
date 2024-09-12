import type { TeamRequisiteCardDto } from "./TeamRequisiteCardDto";

export type TeamRequisiteDto = {
    /**
     * @type string | undefined, uuid
     */
    id?: string;
    /**
     * @type string
     */
    owner?: string | null;
    /**
     * @type string | undefined
     */
    phoneNumber?: string;
    /**
     * @type string
     */
    bankName?: string | null;
    /**
     * @type string | undefined
     */
    country?: string;
    /**
     * @type string | undefined
     */
    currency?: string;
    /**
     * @type string
     */
    tag?: string | null;
    /**
     * @type array | undefined
     */
    cards?: TeamRequisiteCardDto[];
};
