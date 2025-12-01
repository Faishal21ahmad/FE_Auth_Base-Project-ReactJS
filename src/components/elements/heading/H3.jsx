export default function H3(props) {
    const { children, className } = props;
    const baseStayles = "text-1xl font-bold my-5";
    return <h3 lassName={`${baseStayles} ${className}`}>{children}</h3>
}