import { Portal } from "@/app/_components/Portal";
import { globalToast } from "@/layout/layout";
import { types } from "@/openapi";
import {
    getV2AdminMerchantsMerchantid,
    patchV2AdminMerchantsId,
    postV2AdminMerchants,
} from "@/openapi/requests/administrationEndpoints";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { get } from "lodash";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
    name: z.string().trim().min(1).max(255),
    shopName: z.string().trim().min(1).max(255),
});

export const MerchantForm: FC<{
    readonly?: boolean;
    merchant?: types.MerchantAdminDto;
    onSubmit?: () => void;
}> = (props) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: props.merchant?.name ?? "",
            shopName: props.merchant?.shopName ?? "",
        },
    });

    const submitMutation = useMutation({
        mutationFn: async (data: z.infer<typeof formSchema>) => {
            if (props.merchant) {
                if (!props.merchant.id) {
                    throw new Error("Data error, merchant.id is not defined");
                }
                return patchV2AdminMerchantsId(props.merchant.id, {
                    shopName: data.shopName,
                    name: data.name,
                });
            } else {
                return postV2AdminMerchants({
                    shopName: data.shopName,
                    name: data.name,
                });
            }
        },
        onSuccess: (response) => {
            globalToast.show({
                severity: "success",
                summary: "Success action",
                detail: props.merchant
                    ? `Merchant ${props.merchant.name} updated`
                    : "Merchant created",
            });
            props.onSubmit?.();
        },
        onError: (err: AxiosError) => {
            globalToast.show({
                severity: "error",
                summary: "Failed action",
                detail: get(err.response, "data.detail", "Server error"),
            });
        },
    });

    const getFormErrorMessage = (name: keyof typeof form.formState.errors) => {
        const error = form.formState.errors[name];

        return error && <small className="p-error">{error.message}</small>;
    };

    return (
        <>
            <Portal to="submit-button">
                {/* @TODO: маскировать кнопку во время реквеста */}
                <Button
                    label="Save"
                    icon="pi pi-check"
                    onClick={form.handleSubmit((data) =>
                        submitMutation.mutate(data)
                    )}
                />
            </Portal>

            <form
                onSubmit={form.handleSubmit((data) =>
                    submitMutation.mutate(data)
                )}
                className="p-fluid"
            >
                <div className="field">
                    <label
                        htmlFor="name"
                        className={classNames({
                            "p-error": form.formState.errors.name,
                        })}
                    >
                        Name
                    </label>
                    <Controller
                        name="name"
                        control={form.control}
                        rules={{ required: "Name is required." }}
                        render={({ field, fieldState }) => (
                            <InputText
                                id={field.name}
                                {...field}
                                readOnly={props.readonly}
                                className={classNames({
                                    "p-invalid": fieldState.invalid,
                                })}
                            />
                        )}
                    />
                    {getFormErrorMessage("name")}
                </div>
                <div className="field">
                    <label
                        htmlFor="shopName"
                        className={classNames({
                            "p-error": form.formState.errors.shopName,
                        })}
                    >
                        Shop name
                    </label>
                    <Controller
                        name="shopName"
                        control={form.control}
                        rules={{ required: "Shop name is required." }}
                        render={({ field, fieldState }) => (
                            <InputText
                                id={field.name}
                                {...field}
                                readOnly={props.readonly}
                                className={classNames({
                                    "p-invalid": fieldState.invalid,
                                })}
                            />
                        )}
                    />
                    {getFormErrorMessage("shopName")}
                </div>
            </form>
        </>
    );
};
