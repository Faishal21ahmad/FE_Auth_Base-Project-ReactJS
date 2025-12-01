export default function H2(props) {
    const { children, className } = props;
    const baseStayles = "text-3xl font-bold my-5";
    return <h2 className={`${baseStayles} ${className}`}>{children}</h2>
}