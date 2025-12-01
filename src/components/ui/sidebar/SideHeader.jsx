import { Link } from "react-router-dom"
export default function SideHeader(props) {
    const { className } = props;
    const baseStayles = "h-32 font-bold text-3xl flex justify-center items-center";
    return <div className={`${baseStayles} ${className}`}><Link to="/">LOGO</Link></div>
}