import React from "react";
import { Outlet } from 'react-router-dom';
import { AuthMessageProvider } from '@/contexts/AuthMessageContext';

export default function AppLayout() {
    return <AuthMessageProvider>
        <div className="min-h-screen flex flex-col gap-5 items-center justify-center bg-zinc-100 dark:bg-stone-950 font-sans px-4">
            <Outlet />
        </div>
    </AuthMessageProvider>
}