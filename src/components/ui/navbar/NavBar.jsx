export default function NavBar(props) {
    const { children, className } = props;
    const baseStayles = "gap-2 flex";
    return <nav className={`${baseStayles} ${className}`}>{children}</nav>
}