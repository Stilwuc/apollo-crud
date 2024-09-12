import { InputPortalElement, usePortalStore } from "@/lib/portal";
import React, { FC } from "react";

export function renderModal<P extends { onClose: () => void }>(
    Component: FC<P>,
    props: Omit<P, "onClose"> & { onClose?: () => void }
): Promise<void> {
    const portalWrapper = document.body;
    const portal = portalWrapper.appendChild(document.createElement("div"));

    return new Promise((resolve) => {
        const handleResolve = () => {
            usePortalStore.getState().removePortalElement(id);
            if (props.onClose) props.onClose();
            portal.remove();
            resolve();
        };

        const component = (
            <Component {...(props as P)} onClose={handleResolve} />
        );
        const newPortalElement: InputPortalElement = {
            target: portal,
            component,
        };

        const id = usePortalStore.getState().addPortalElement(newPortalElement);
    });
}
