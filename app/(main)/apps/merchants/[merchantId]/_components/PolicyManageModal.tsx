import {
    PoliciesProps,
    Policy,
} from "@/app/(main)/apps/merchants/[merchantId]/_components/Policies";
import { globalToast } from "@/layout/layout";
import {
    getV2AdminCurrencies,
    getV2AdminTrafficCascades,
    getV2AdminTrafficThreads,
} from "@/openapi/requests/administrationEndpoints";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { get } from "lodash";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { classNames } from "primereact/utils";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

interface PolicyManageModalProps {
    merchantId: string;
    editablePolicy?: Policy;
    updateItem: PoliciesProps["updateItem"];
    createItem: PoliciesProps["createItem"];
    onUpdate?: () => void;
    onClose: () => void;
}

// @TODO: добавить больше валидации
const formSchema = z.object({
    currencyId: z.string(),
    trafficCascadeId: z.number(),
    trafficThreadId: z.number(),
    minProfitRate: z.number(),
    honeyMoneyRate: z.number(),
    minAmount: z.number(),
    maxAmount: z.number(),
});

export const PolicyManageModal: FC<PolicyManageModalProps> = (props) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            minAmount: props.editablePolicy?.minAmount,
            maxAmount: props.editablePolicy?.maxAmount,
            honeyMoneyRate: props.editablePolicy?.honeyMoneyRate,
        },
    });

    const currenciesQuery = useQuery({
        queryKey: ["/v2/admin/currencies"],
        queryFn: () => getV2AdminCurrencies(),
    });

    const trafficCascadesQuery = useQuery({
        queryKey: ["/v2/admin/traffic-cascades"],
        // @FIXME
        queryFn: () => getV2AdminTrafficCascades({ pageSize: 9999 }),
    });

    const trafficThreadsQuery = useQuery({
        queryKey: ["/v2/admin/traffic-threads"],
        queryFn: () => getV2AdminTrafficThreads(),
    });

    const submitMutation = useMutation({
        mutationFn: async (data: z.infer<typeof formSchema>) => {
            if (props.editablePolicy) {
                if (!props.editablePolicy.id) {
                    throw new Error("Data error, policy.id is not defined");
                }
                return props.updateItem(props.editablePolicy.id, data);
            } else {
                return props.createItem(data);
            }
        },
        onSuccess: (response) => {
            globalToast.show({
                severity: "success",
                summary: "Success action",
                detail: props.editablePolicy
                    ? `Policy ${props.editablePolicy.id} updated`
                    : "Policy created",
            });
            props.onUpdate?.();
            props.onClose();
        },
        onError: (err: AxiosError) => {
            console.log(JSON.stringify(err));
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
        <Dialog
            header={
                props.editablePolicy
                    ? `Policy ${props.editablePolicy.id} details`
                    : "Creating Policy"
            }
            visible
            onHide={props.onClose}
            style={{ width: "550px" }}
            modal
            footer={
                <>
                    <Button
                        label="Cancel"
                        icon="pi pi-times"
                        text
                        onClick={props.onClose}
                    />
                    {/* @TODO: маскировать кнопку во время реквеста */}
                    <Button
                        label="Save"
                        icon="pi pi-check"
                        onClick={form.handleSubmit((data) =>
                            submitMutation.mutate(data)
                        )}
                    />
                </>
            }
        >
            <form
                onSubmit={form.handleSubmit((data) =>
                    submitMutation.mutate(data)
                )}
                className="p-fluid"
            >
                <div className="field">
                    <label
                        htmlFor="currencyId"
                        className={classNames({
                            "p-error": form.formState.errors.currencyId,
                        })}
                    >
                        currencyId
                    </label>
                    <Controller
                        name="currencyId"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Dropdown
                                {...field}
                                options={currenciesQuery.data?.map(
                                    (currency) => ({
                                        label: currency.name,
                                        value: currency.id,
                                    })
                                )}
                            />
                        )}
                    />
                    {getFormErrorMessage("currencyId")}
                </div>
                <div className="field">
                    <label
                        htmlFor="trafficThreadId"
                        className={classNames({
                            "p-error": form.formState.errors.trafficThreadId,
                        })}
                    >
                        trafficThreadId
                    </label>
                    <Controller
                        name="trafficThreadId"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Dropdown
                                {...field}
                                options={trafficThreadsQuery.data?.map(
                                    (currency) => ({
                                        label: currency.name,
                                        value: currency.id,
                                    })
                                )}
                            />
                        )}
                    />
                    {getFormErrorMessage("trafficThreadId")}
                </div>
                <div className="field">
                    <label
                        htmlFor="trafficCascadeId"
                        className={classNames({
                            "p-error": form.formState.errors.trafficCascadeId,
                        })}
                    >
                        trafficCascadeId
                    </label>
                    <Controller
                        name="trafficCascadeId"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Dropdown
                                {...field}
                                options={trafficCascadesQuery.data?.items?.map(
                                    (currency) => ({
                                        label: currency.name,
                                        value: currency.id,
                                    })
                                )}
                            />
                        )}
                    />
                    {getFormErrorMessage("trafficCascadeId")}
                </div>
                <div className="field">
                    <label
                        htmlFor="honeyMoneyRate"
                        className={classNames({
                            "p-error": form.formState.errors.honeyMoneyRate,
                        })}
                    >
                        honeyMoneyRate
                    </label>
                    <Controller
                        name="honeyMoneyRate"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <InputNumber
                                id={field.name}
                                {...field}
                                onChange={(event) =>
                                    field.onChange({
                                        target: {
                                            value: event.value,
                                        },
                                    })
                                }
                                mode="decimal"
                                showButtons
                                min={0}
                                max={1}
                                step={0.1}
                                className={classNames({
                                    "p-invalid": fieldState.invalid,
                                })}
                            />
                        )}
                    />
                    {getFormErrorMessage("honeyMoneyRate")}
                </div>
                <div className="field">
                    <label
                        htmlFor="minAmount"
                        className={classNames({
                            "p-error": form.formState.errors.minAmount,
                        })}
                    >
                        minAmount
                    </label>
                    <Controller
                        name="minAmount"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <InputNumber
                                id={field.name}
                                {...field}
                                onChange={(event) =>
                                    field.onChange({
                                        target: {
                                            value: event.value,
                                        },
                                    })
                                }
                                mode="currency"
                                currency="USD"
                                min={0}
                                showButtons
                                locale="en-US"
                                className={classNames({
                                    "p-invalid": fieldState.invalid,
                                })}
                            />
                        )}
                    />
                    {getFormErrorMessage("minAmount")}
                </div>
                <div className="field">
                    <label
                        htmlFor="maxAmount"
                        className={classNames({
                            "p-error": form.formState.errors.maxAmount,
                        })}
                    >
                        maxAmount
                    </label>
                    <Controller
                        name="maxAmount"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <InputNumber
                                id={field.name}
                                {...field}
                                onChange={(event) =>
                                    field.onChange({
                                        target: {
                                            value: event.value,
                                        },
                                    })
                                }
                                mode="currency"
                                min={23}
                                showButtons
                                currency="USD"
                                locale="en-US"
                                className={classNames({
                                    "p-invalid": fieldState.invalid,
                                })}
                            />
                        )}
                    />
                    {getFormErrorMessage("maxAmount")}
                </div>
                <div className="field">
                    <label
                        htmlFor="minProfitRate"
                        className={classNames({
                            "p-error": form.formState.errors.minProfitRate,
                        })}
                    >
                        minProfitRate
                    </label>
                    <Controller
                        name="minProfitRate"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <InputNumber
                                id={field.name}
                                {...field}
                                onChange={(event) =>
                                    field.onChange({
                                        target: {
                                            value: event.value,
                                        },
                                    })
                                }
                                showButtons
                                min={0}
                                max={1}
                                step={0.1}
                                className={classNames({
                                    "p-invalid": fieldState.invalid,
                                })}
                            />
                        )}
                    />
                    {getFormErrorMessage("minProfitRate")}
                </div>
            </form>
        </Dialog>
    );
};
