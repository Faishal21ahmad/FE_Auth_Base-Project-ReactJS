import { H1 } from '@/components/elements/heading/index';
import { useDashboardTitle } from '@/contexts/TitleDashboardContext';
export default function Setting() {
    useDashboardTitle("Setting");

    return <div>
        <H1>Setting</H1>
        <H1></H1>
    </div>
}