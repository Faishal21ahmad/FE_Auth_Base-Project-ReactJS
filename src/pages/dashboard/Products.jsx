import { H1 } from '@/components/elements/heading/index';
import { useDashboardTitle } from '@/contexts/TitleDashboardContext';

export default function Products() {
    useDashboardTitle("Products");

    return <div>
        <H1>Product</H1>
        <H1></H1>
    </div>
}