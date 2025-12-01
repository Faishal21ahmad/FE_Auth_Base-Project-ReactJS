import SideHeader from "./SideHeader";
import SideFooter from "./SideFooter";
import NavGrup from "@/components/ui/navigasi/NavGrup";
import NavLink from "@/components/ui/navigasi/NavLink";
import BtnLogout from "@/components/elements/button/BtbLogout";

export default function SideBar(props) {
    const { open, onClose } = props;
    return <>
        <div id="overlay" onClick={onClose} className={`fixed z-10 top-0 left-0 w-full h-screen bg-stone-900/50 backdrop-blur-xs md:hidden ${open ? "block" : "hidden"}`}></div>
        <aside id="sidebar" className={` w-64 h-screen p-2 fixed z-20 text-black dark:text-zinc-50 bg-zinc-50 dark:bg-stone-950  border-r border-zinc-100 dark:border-stone-950 transition-transform duration-300 md:translate-x-0 md:block ${open ? "translate-x-0" : "-translate-x-64"}`}>
            <div className="flex flex-col gap-4">
                <SideHeader />
                <NavGrup>
                    <hr className=" border-zinc-300 dark:border-zinc-700" />
                    <NavLink to="/dashboard">Dashboard</NavLink>
                    <NavLink to="/products">Products</NavLink>
                    <NavLink to="/transaction">Transaction</NavLink>

                    <hr className=" border-zinc-300 dark:border-zinc-700" />
                    <NavLink to="/profile">Profile</NavLink>
                    <NavLink to="/setting">Settings</NavLink>
                    <BtnLogout />
                </NavGrup>
                <SideFooter />
            </div>
        </aside>
    </>
}