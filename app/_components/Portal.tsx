import React, { FC, ReactNode, memo, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
    to: string;
    children: ReactNode;
    className?: string;
}

export const Portal: FC<PortalProps> = ({ children, to, className }) => {
    const wrapper = useRef(document.createElement("div"));
    const portalTarget = useRef<null | HTMLElement>();

    useEffect(() => {
        if (className) wrapper.current.className = className;
    }, [className]);

    useEffect(() => {
        portalTarget.current = document && document.getElementById(to);
        portalTarget.current &&
            portalTarget.current.appendChild(wrapper.current);

        const removePortal = () => {
            portalTarget.current &&
                portalTarget.current.removeChild(wrapper.current);
        };

        return removePortal;
    }, [to]);

    return createPortal(children, wrapper.current);
};

interface PortalTargetProps {
    targetName: string;
    children?: ReactNode;
}

export const PortalTarget: React.FC<PortalTargetProps> = ({
    targetName,
    children,
}) => {
    return <div id={targetName}>{children}</div>;
};
