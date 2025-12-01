import React from "react";
import { Outlet, Link } from 'react-router-dom';
import WarpApps from "@/components/fragments/wrap/WarpApps";
import { NavBar, NavLink } from "@/components/ui/navbar/index";
import { checkCookie } from '@/utils/cookieUtils';

export default function AppLayout() {
    const isLoggedIn = checkCookie('accessToken');

    return <div className="h-screen flex flex-col">
        <header className="flex w-full h-12 z-20 fixed bg-zinc-50 dark:bg-stone-950 dark:text-white text-black items-center justify-center shadow-sm dark:shadow-gray-900/50">
            <WarpApps className="justify-between items-center">
                <Link to="/" className="font-semibold text-xl">Name Apps</Link>
                <NavBar>
                    {!isLoggedIn && (
                        <>
                            <NavLink to="/login">Login</NavLink>
                            <NavLink to="/register">Register</NavLink>
                        </>
                    )}
                    {isLoggedIn && (
                        <>
                            <NavLink to="/dashboard">Dashboard</NavLink>
                        </>
                    )}
                </NavBar>
            </WarpApps>
        </header>
        <main className="pt-20 dark:bg-stone-900 bg-zinc-100 dark:text-white text-black ">
            <WarpApps className="h-full mb-5">
                <Outlet />
            </WarpApps>
        </main>
        <footer>
            <WarpApps className="justify-center py-4 mt-auto bg-stone-950 text-white">
                <p>© 2024 My Application. All rights reserved.</p>
            </WarpApps>
        </footer>
    </div>
}