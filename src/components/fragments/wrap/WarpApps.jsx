export default function WarpApps(props) {
    const { children, className } = props;
    const baseStayles = "flex w-full px-5 md:px-20 lg:px-40";
    return <div className={`${baseStayles} ${className}`}>{children}</div >
}
