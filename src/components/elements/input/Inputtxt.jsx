import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function InputTxt(props) {
    const {
        id = "input1",
        type = "text",
        label = "label",
        placeholder = "input1",
        value = "",
        onChange = () => { },
        hidden = false,
        autoComplete = id,
        required = true,
    } = props;

    const [showPassword, setShowPassword] = useState(false);

    if (hidden) return <input id={id} type="hidden" value={value} onChange={(e) => onChange(e.target.value)} />

    const isPassword = type === "password";
    const currentType = isPassword && showPassword ? "text" : type;

    return <div className="mb-4 w-full relative">
        {label && (
            <label htmlFor={id} className="block px-2 mb-2 text-sm font-medium text-stone-900 dark:text-white text-start">{label}</label>
        )}

        <input
            id={id}
            type={currentType}
            value={value}
            placeholder={placeholder}
            required={required}
            autoComplete={autoComplete}
            onChange={(e) => onChange(e.target.value)}
            className="focus:outline-2 outline-stone-300 dark:outline-stone-700 border border-stone-300 dark:border-stone-900 text-stone-900 text-sm rounded-lg block w-full p-2.5 pr-11 dark:placeholder-stone-400 dark:text-white bg-zinc-100 dark:bg-stone-800 "
        />

        {isPassword && (
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-[38px] p-1 text-stone-500 dark:text-stone-300">
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
        )}
    </div>
}