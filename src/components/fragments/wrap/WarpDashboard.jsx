export default function WarpDashboard(props) {
    const { children, className } = props;
    const baseStayles = "flex ml-0 md:ml-64 px-4 md:px-8 w-full";
    return <div className={`${baseStayles} ${className}`}>{children}</div>
}