"use client";
import { AuthProvider } from "@/layout/context/authcontext";
import { usePortalStore } from "@/lib/portal";
import type { AppTopbarRef, ChildContainerProps } from "@/types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { usePathname, useSearchParams } from "next/navigation";
import PrimeReact from "primereact/api";
import {
    useEventListener,
    useMountEffect,
    useResizeListener,
    useUnmountEffect,
} from "primereact/hooks";
import { Toast } from "primereact/toast";
import { DomHandler, classNames } from "primereact/utils";
import React, { useCallback, useContext, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import AppBreadCrumb from "./AppBreadCrumb";
import AppConfig from "./AppConfig";
import AppProfileSidebar from "./AppProfileSidebar";
import AppSidebar from "./AppSidebar";
import AppTopbar from "./AppTopbar";
import { LayoutContext } from "./context/layoutcontext";

export let globalToast: Toast;

const makeQueryClient = () => {
    return new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnMount: true,
                refetchOnReconnect: true,
                // With SSR, we usually want to set some default staleTime
                // above 0 to avoid refetching immediately on the client
                staleTime: 1000,
            },
        },
    });
};

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
    if (typeof window === "undefined") {
        // Server: always make a new query client
        return makeQueryClient();
    } else {
        // Browser: make a new query client if we don't already have one
        // This is very important, so we don't re-make a new client if React
        // suspends during the initial render. This may not be needed if we
        // have a suspense boundary BELOW the creation of the query client
        if (!browserQueryClient) browserQueryClient = makeQueryClient();
        return browserQueryClient;
    }
}

const Layout = (props: ChildContainerProps) => {
    const {
        layoutConfig,
        layoutState,
        setLayoutState,
        isSlim,
        isSlimPlus,
        isHorizontal,
        isDesktop,
    } = useContext(LayoutContext);
    const topbarRef = useRef<AppTopbarRef>(null);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const portalElements = usePortalStore((state) => state.portalElements);
    const [bindMenuOutsideClickListener, unbindMenuOutsideClickListener] =
        useEventListener({
            type: "click",
            listener: (event) => {
                const isOutsideClicked = !(
                    sidebarRef.current?.isSameNode(event.target as Node) ||
                    sidebarRef.current?.contains(event.target as Node) ||
                    topbarRef.current?.menubutton?.isSameNode(
                        event.target as Node
                    ) ||
                    topbarRef.current?.menubutton?.contains(
                        event.target as Node
                    )
                );

                if (isOutsideClicked) {
                    hideMenu();
                }
            },
        });

    const [bindDocumentResizeListener, unbindDocumentResizeListener] =
        useResizeListener({
            listener: () => {
                if (isDesktop() && !DomHandler.isTouchDevice()) {
                    hideMenu();
                }
            },
        });

    let timeout: ReturnType<typeof setTimeout> | null = null;

    const onMouseEnter = () => {
        if (!layoutState.anchored) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            setLayoutState((prevLayoutState) => ({
                ...prevLayoutState,
                sidebarActive: true,
            }));
        }
    };

    const onMouseLeave = () => {
        if (!layoutState.anchored) {
            if (!timeout) {
                timeout = setTimeout(
                    () =>
                        setLayoutState((prevLayoutState) => ({
                            ...prevLayoutState,
                            sidebarActive: false,
                        })),
                    300
                );
            }
        }
    };

    const hideMenu = useCallback(() => {
        setLayoutState((prevLayoutState) => ({
            ...prevLayoutState,
            overlayMenuActive: false,
            overlaySubmenuActive: false,
            staticMenuMobileActive: false,
            menuHoverActive: false,
            resetMenu:
                (isSlim() || isSlimPlus() || isHorizontal()) && isDesktop(),
        }));
    }, [isSlim, isSlimPlus, isHorizontal, isDesktop, setLayoutState]);

    const blockBodyScroll = () => {
        if (document.body.classList) {
            document.body.classList.add("blocked-scroll");
        } else {
            document.body.className += " blocked-scroll";
        }
    };

    const unblockBodyScroll = () => {
        if (document.body.classList) {
            document.body.classList.remove("blocked-scroll");
        } else {
            document.body.className = document.body.className.replace(
                new RegExp(
                    "(^|\\b)" +
                        "blocked-scroll".split(" ").join("|") +
                        "(\\b|$)",
                    "gi"
                ),
                " "
            );
        }
    };

    useMountEffect(() => {
        PrimeReact.ripple = true;
    });

    useEffect(() => {
        if (
            layoutState.overlayMenuActive ||
            layoutState.staticMenuMobileActive ||
            layoutState.overlaySubmenuActive
        ) {
            bindMenuOutsideClickListener();
        }

        if (layoutState.staticMenuMobileActive) {
            blockBodyScroll();
            (isSlim() || isSlimPlus() || isHorizontal()) &&
                bindDocumentResizeListener();
        }

        return () => {
            unbindMenuOutsideClickListener();
            unbindDocumentResizeListener();
            unblockBodyScroll();
        };
    }, [
        layoutState.overlayMenuActive,
        layoutState.staticMenuMobileActive,
        layoutState.overlaySubmenuActive,
    ]);

    useEffect(() => {
        const onRouteChange = () => {
            hideMenu();
        };
        onRouteChange();
    }, [pathname, searchParams]);

    useUnmountEffect(() => {
        unbindMenuOutsideClickListener();
    });

    const containerClass = classNames({
        "layout-light": layoutConfig.colorScheme === "light",
        "layout-dim": layoutConfig.colorScheme === "dim",
        "layout-dark": layoutConfig.colorScheme === "dark",
        "layout-colorscheme-menu": layoutConfig.menuTheme === "colorScheme",
        "layout-primarycolor-menu": layoutConfig.menuTheme === "primaryColor",
        "layout-transparent-menu": layoutConfig.menuTheme === "transparent",
        "layout-overlay": layoutConfig.menuMode === "overlay",
        "layout-static": layoutConfig.menuMode === "static",
        "layout-slim": layoutConfig.menuMode === "slim",
        "layout-slim-plus": layoutConfig.menuMode === "slim-plus",
        "layout-horizontal": layoutConfig.menuMode === "horizontal",
        "layout-reveal": layoutConfig.menuMode === "reveal",
        "layout-drawer": layoutConfig.menuMode === "drawer",
        "layout-static-inactive":
            layoutState.staticMenuDesktopInactive &&
            layoutConfig.menuMode === "static",
        "layout-overlay-active": layoutState.overlayMenuActive,
        "layout-mobile-active": layoutState.staticMenuMobileActive,
        "p-input-filled": layoutConfig.inputStyle === "filled",
        "p-ripple-disabled": !layoutConfig.ripple,
        "layout-sidebar-active": layoutState.sidebarActive,
        "layout-sidebar-anchored": layoutState.anchored,
    });

    const queryClient = getQueryClient();

    return (
        <React.Fragment>
            <AuthProvider>
                <div className={classNames("layout-container", containerClass)}>
                    <div
                        ref={sidebarRef}
                        className="layout-sidebar"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <AppSidebar />
                    </div>
                    <div className="layout-content-wrapper">
                        <AppTopbar ref={topbarRef} />

                        <AppBreadCrumb className="content-breadcrumb"></AppBreadCrumb>
                        <div className="layout-content">
                            <QueryClientProvider client={queryClient}>
                                {props.children}
                                {portalElements.map((pElement) =>
                                    createPortal(
                                        pElement.component,
                                        pElement.target
                                    )
                                )}
                            </QueryClientProvider>
                        </div>
                    </div>
                    <AppProfileSidebar />
                    <Toast ref={(ref) => (globalToast = ref!)} />
                    <AppConfig />
                    <div className="layout-mask"></div>
                </div>
            </AuthProvider>
        </React.Fragment>
    );
};

export default Layout;
