import { Outlet } from 'react-router-dom';
import NavGrup from "@/components/ui/navigasi/NavGrup";
import NavLink from "@/components/ui/navigasi/NavLink";
export default function SubLayoutProfile() {
    return <div className="block md:flex w-full gap-4">
        <div className="w-full md:w-[20%]">
            <NavGrup>
                <NavLink to="/profile" end>Profile</NavLink>
                <NavLink to="/profile/profile2" end>Profile2</NavLink>
                <NavLink to="/profile/profile3" end>Profile3</NavLink>
            </NavGrup>
        </div>
        <div className="w-full md:w-[80%]">
            <Outlet />
        </div>
    </div>
}