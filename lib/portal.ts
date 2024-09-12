import { uniqueId } from "lodash";
import { ReactNode } from "react";
import { create } from "zustand";

export interface InputPortalElement {
    target: Element;
    component: ReactNode;
}

interface PortalElement extends InputPortalElement {
    id: string;
}

interface PortalStore {
    portalElements: PortalElement[];
    removePortalElement: (id: string) => void;
    addPortalElement: (portalElement: InputPortalElement) => string;
}

export const usePortalStore = create<PortalStore>((set, get) => ({
    portalElements: [],
    removePortalElement: (id) => {
        const { portalElements } = get();

        set({ portalElements: portalElements.filter((el) => el.id !== id) });
    },

    addPortalElement: (portalElement) => {
        const { portalElements } = get();
        const newPortalElement: PortalElement = {
            ...portalElement,
            id: uniqueId(),
        };

        set({ portalElements: [...portalElements, newPortalElement] });

        return newPortalElement.id;
    },
}));
