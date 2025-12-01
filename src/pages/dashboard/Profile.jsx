import { H1 } from '@/components/elements/heading/index';
import { useDashboardTitle } from '@/contexts/TitleDashboardContext';

export default function Profile() {
    useDashboardTitle("Profile");
    return <div>
        <H1>Profile</H1>
        <H1></H1>
    </div>
}