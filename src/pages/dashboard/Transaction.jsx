import { H1 } from '@/components/elements/heading/index';
import { useDashboardTitle } from '@/contexts/TitleDashboardContext';

export default function Transaction() {
    useDashboardTitle("Transaction");

    return <div>
        <H1>Transaction</H1>
        <H1></H1>
    </div>
}