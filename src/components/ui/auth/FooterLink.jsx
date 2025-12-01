import { Link } from "react-router-dom";

export default function FooterLink(props) {
    const { text, textLink, to } = props;
    return <p className="text-black dark:text-white">{text}<Link to={to} className="text-blue-700 mx-2 hover:underline">{textLink}</Link></p>
}