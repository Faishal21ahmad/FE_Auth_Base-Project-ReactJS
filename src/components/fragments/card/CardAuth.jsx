export default function CardAuth(props) {
    const { children } = props;
    return <main className="w-full max-w-md bg-white dark:bg-stone-900 border border-stone-300/40 dark:border-stone-700/40 rounded-md shadow-lg p-4" >
        <div className="gap-4 flex flex-col">{children}</div>
    </main>
}