import { useDataUser } from "@/contexts/DataUserContext";

export default function SideFooter(props) {
    const { className } = props;
    const { userData } = useDataUser();
    const baseStayles = "gap-1 p-3 flex flex-col rounded-lg bg-zinc-100 dark:bg-stone-900 border border-zinc-200 dark:border-stone-700 text-black dark:text-zinc-100 shadow-sm";

    return <div className={`p-3 bottom-0 left-0 absolute w-full`} >
        <div className={`${baseStayles} ${className}`}>
            <p>{userData.name || "Feyana"}</p>
            <p>{userData.email || "Feyana@gmail.com"}</p>
        </div>
    </div>
}