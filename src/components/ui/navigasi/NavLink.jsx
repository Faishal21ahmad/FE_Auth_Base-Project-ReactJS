import { NavLink } from "react-router-dom";

export default function SideLink({ children, className = "", to, end = false }) {
    const baseStyles = "block w-full p-2 rounded-md hover:bg-zinc-200 dark:hover:bg-stone-700";
    return <NavLink to={to} end={end} className={({ isActive }) => `${baseStyles} ${isActive ? "bg-zinc-300 dark:bg-stone-800 font-semibold" : ""} ${className}`}>
        {children}
    </NavLink>
}