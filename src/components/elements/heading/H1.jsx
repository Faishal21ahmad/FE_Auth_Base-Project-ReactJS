export default function H1(props) {
    const { children, className } = props;
    const baseStayles = "text-4xl font-bold my-5";
    return <h1 className={`${baseStayles} ${className}`}>{children}</h1>
}