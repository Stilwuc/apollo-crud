import { MerchantForm } from "@/app/(main)/apps/merchants/_components/MerchantForm";
import { PortalTarget } from "@/app/_components/Portal";
import { globalToast } from "@/layout/layout";
import { types } from "@/openapi";
import {
    getV2AdminMerchantsMerchantid,
    patchV2AdminMerchantsId,
    postV2AdminMerchants,
} from "@/openapi/requests/administrationEndpoints";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { TabPanel, TabView } from "primereact/tabview";
import { classNames } from "primereact/utils";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

interface MerchantManageModalProps {
    editableMerchant?: types.MerchantAdminsDto;
    onUpdate?: () => void;
    onClose: () => void;
}

export const MerchantManageModal: FC<MerchantManageModalProps> = (props) => {
    const merchantQuery = useQuery({
        queryKey: ["/v2/admin/merchants/:id", props.editableMerchant?.id],
        queryFn: () =>
            getV2AdminMerchantsMerchantid(props.editableMerchant!.id!),
        enabled: !!props.editableMerchant,
    });

    // @TODO: loader
    if (merchantQuery.isLoading) return null;

    console.log(merchantQuery.data);

    return (
        <Dialog
            header={
                props.editableMerchant
                    ? `Merchant ${props.editableMerchant.name} details`
                    : "Creating Merchant"
            }
            visible
            onHide={props.onClose}
            style={{ width: "550px" }}
            modal
            footer={
                <div
                    className="flex gap-2 w-full"
                    style={{ justifyContent: "right" }}
                >
                    <Button
                        label="Cancel"
                        icon="pi pi-times"
                        text
                        onClick={props.onClose}
                    />
                    <PortalTarget targetName="submit-button" />
                </div>
            }
        >
            <MerchantForm
                merchant={merchantQuery.data}
                onSubmit={() => {
                    props.onUpdate?.();
                    props.onClose();
                }}
            />
        </Dialog>
    );
};
