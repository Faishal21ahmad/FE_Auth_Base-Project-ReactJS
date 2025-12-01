import { createContext, useState, useEffect, useContext } from "react";
import { getCookie } from "@/utils/cookieUtils";
import { jwtDecode } from "jwt-decode";

export const DataUserContext = createContext();

export function DataUserProvider({ children }) {
    const [userData, setUserData] = useState({
        name: "",
        email: ""
    });

    const setUserDataDirect = (decodedUser) => {
        setUserData({
            name: decodedUser.name,
            email: decodedUser.email,
        });
    };

    useEffect(() => {
        const token = getCookie("accessToken");
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setUserData({
                    name: decoded.name,
                    email: decoded.email,
                });
            } catch (e) {
                console.error("Invalid saved token:", e);
            }
        }
    }, []);

    return <DataUserContext.Provider value={{ userData, setUserDataDirect }}>
        {children}
    </DataUserContext.Provider>
}

export function useDataUser() {
    return useContext(DataUserContext);
}
