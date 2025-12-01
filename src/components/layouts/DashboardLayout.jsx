import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import WarpDashboard from "@/components/fragments/wrap/WarpDashboard";
import SideBar from '@/components/ui/sidebar/SideBar.jsx';
import HeaderDashboard from '@/components/ui/header/HeaderDashboard.jsx';
import { useDashboardTitle } from '@/contexts/TitleDashboardContext';

export default function DashboardLayout() {
    const [openSidebar, setOpenSidebar] = useState(false);
    const { title } = useDashboardTitle();

    return <div className="h-screen flex flex-col">
        <HeaderDashboard onToggle={() => setOpenSidebar(!openSidebar)} title={title} />
        <SideBar open={openSidebar} onClose={() => setOpenSidebar(false)} />
        <main className="flex pt-16 h-full bg-zinc-100 dark:bg-stone-900 text-black dark:text-white">
            <WarpDashboard>
                <Outlet />
            </WarpDashboard>
        </main>
    </div>
}