import { H1 } from '@/components/elements/heading/index';
import { useDashboardTitle } from '@/contexts/TitleDashboardContext';

export default function Dashboard() {
    useDashboardTitle("Dashboard");

    return <div>
        <H1>Dashboard</H1>
        <H1></H1>
    </div>
}