import { Outlet } from 'react-router-dom';
import NavGrup from "@/components/ui/navigasi/NavGrup";
import NavLink from "@/components/ui/navigasi/NavLink";

export default function SubLayoutSetting() {
    return <div className="block md:flex w-full gap-4">
        <div className="w-full md:w-[20%]">
            <NavGrup>
                <NavLink to="/setting" end>Setting</NavLink>
                <NavLink to="/setting/setting2" end>Setting2</NavLink>
                <NavLink to="/setting/setting3" end>Setting3</NavLink>
            </NavGrup>
        </div>
        <div className="w-full md:w-[80%]">
            <Outlet />
        </div>
    </div>
}