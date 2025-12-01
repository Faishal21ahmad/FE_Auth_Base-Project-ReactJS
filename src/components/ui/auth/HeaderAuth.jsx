import { H1 } from '@/components/elements/heading/index';

export default function HeaderAuth(props) {
    const { title, message, success } = props;
    return <header className='text-center'>
        <H1 className="text-black dark:text-white py-2">{title}</H1>
        <p className={`text-sm ${!success ? "text-red-500" : "text-green-500 "} `}>{message}</p>
    </header>
}