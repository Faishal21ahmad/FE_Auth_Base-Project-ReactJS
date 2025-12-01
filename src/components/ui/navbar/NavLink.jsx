import { Link } from "react-router-dom";

export default function NavLink(props) {
    const { children, className, to } = props;
    const baseStayles = "py-3 px-2 hover:bg-stone-500/50 hover:text-white";
    return <Link to={to} className={`${baseStayles} ${className}`}>{children}</Link>
}