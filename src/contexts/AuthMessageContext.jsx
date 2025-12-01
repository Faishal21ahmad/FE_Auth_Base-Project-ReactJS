import { createContext, useContext, useState } from "react";

const AuthMessageContext = createContext();

export function AuthMessageProvider({ children }) {
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(true);
    const [loading, setLoading] = useState(false);

    return <AuthMessageContext.Provider value={{ message, setMessage, success, setSuccess, loading, setLoading }}>
        {children}
    </AuthMessageContext.Provider>
}

export function useAuthMessage() {
    return useContext(AuthMessageContext);
}
