export default function SideBody(props) {
    const { children, className } = props;
    const baseStayles = "flex h-full flex-col gap-1 ";
    return <div className={`${baseStayles} ${className}`}>{children}</div>
}