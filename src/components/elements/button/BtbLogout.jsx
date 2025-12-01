import { removeCookie } from "@/utils/cookieUtils"

export default function BtnLogout() {
    const handleLogout = () => {
        removeCookie("accessToken")
        window.location.replace("/login");
        window.location.reload();
    }

    return <button type="button" onClick={handleLogout} className="block w-full p-2 hover:bg-zinc-200 hover: hover:dark:bg-stone-700 rounded-md text-left cursor-pointer"> Logout </button>
}