import React, {
    FC,
    PropsWithChildren,
    createContext,
    startTransition,
    useEffect,
    useMemo,
    useState,
} from "react";
import Keycloak from "keycloak-js";
import { useKeycloak } from "@react-keycloak/web";
import { initKeycloak, keycloak } from "@/lib/keycloak";

export const AuthContext = createContext({} as { authenticated: boolean });

export const AuthProvider: FC<PropsWithChildren> = (props) => {
    const [initialized, setInitialized] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState<{ name: string; email: string }>();

    useEffect(() => {
        if (typeof window !== "undefined") {
            initKeycloak()
                .then((auth) => {
                    startTransition(() => {
                        setAuthenticated(auth);
                        if (keycloak && auth) {
                            setUser({
                                name: keycloak.tokenParsed?.preferred_username,
                                email: keycloak.tokenParsed?.email,
                            });
                        }
                        setInitialized(true);
                    });
                })
                .catch((err) =>
                    console.error("Failed to initialize Keycloak", err)
                );
        }
    }, []);

    const value = useMemo(() => ({ authenticated }), [authenticated]);

    if (!initialized) {
        return <div>Loading...</div>;
    }

    if (!authenticated) {
        return <div>Not authenticated</div>;
    }

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    );
};
