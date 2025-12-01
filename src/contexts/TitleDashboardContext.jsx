import { createContext, useContext, useState, useEffect } from "react";
import { Outlet } from 'react-router-dom';
const TitleDashboardContext = createContext();

export function TitleDashboardProvider() {
    const [title, setTitle] = useState('');

    return <TitleDashboardContext.Provider value={{ title, setTitle }}>
        <Outlet />
    </TitleDashboardContext.Provider>
}

function TitleDashboard() {
    return useContext(TitleDashboardContext);
}

export function useDashboardTitle(defaultValue) {
    const { title, setTitle } = TitleDashboard();

    useEffect(() => {
        if (defaultValue !== undefined && defaultValue !== null) {
            setTitle(defaultValue);
        }
    }, [defaultValue]);

    return { title, setTitle };
}