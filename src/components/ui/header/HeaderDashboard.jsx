import WarpDashboard from "@/components/fragments/wrap/WarpDashboard";
import { useDataUser } from "@/contexts/DataUserContext";

export default function HeaderDashboard(props) {
    const { userData } = useDataUser();
    const { onToggle, title } = props;
    return <header className="flex w-full h-12 bg-zinc-50 dark:bg-stone-950 border-b border-zinc-100 dark:border-stone-950 text-black dark:text-white fixed">
        <button id="toggle-sidebar" onClick={onToggle} className='hover:bg-stone-200 dark:hover:bg-stone-700 cursor-pointer md:hidden'>
            <p className="px-3 py-1 text-black dark:text-white text-3xl font-semibold">≡</p>
        </button>
        <WarpDashboard className="justify-between w-full">
            <p className="py-3">{title}</p>
            <p className="py-3">Hai. {userData.name || "Feyana"}</p>
        </WarpDashboard>
    </header>
}