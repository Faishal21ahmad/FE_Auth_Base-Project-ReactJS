import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuthMessage } from '@/contexts/AuthMessageContext';
import InputTxt from '@/components/elements/input/Inputtxt';
import CardAuth from '@/components/fragments/card/CardAuth';
import HeaderAuth from '@/components/ui/auth/HeaderAuth';
import FooterLink from '@/components/ui/auth/FooterLink';
import Button from '@/components/elements/button/Button';
import Auth from '@/services/api/authService';

export default function Register() {
    const { message, setMessage, success, setSuccess, loading, setLoading } = useAuthMessage('');
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const userData = {
                name: username,
                email,
                password
            };
            await Auth.register(userData);
            setSuccess(true);
            setMessage('Registration Successful. Please Login.');
            navigate("/login");
        } catch (error) {
            setSuccess(false);
            setMessage(error.response?.data?.message || 'Error Service');
        } finally {
            setLoading(false);
        }
    }

    return <>
        <CardAuth>
            <HeaderAuth title="Register" message={message} success={success} />
            <form onSubmit={handleRegister}>
                <InputTxt id="username" type="text" value={username} onChange={setUsername} label="Username" placeholder="fureya" />
                <InputTxt id="email" type="email" value={email} onChange={setEmail} label="Email" placeholder="fureya@example.com" />
                <InputTxt id="password" type="password" value={password} onChange={setPassword} label="New Password" placeholder="**********" />
                <Button type="submit" color="stone" disabled={loading} fullWidth className="mt-4">{loading ? 'Loading...' : 'Submit'}</Button>
            </form>
        </CardAuth>
        <FooterLink text="Already have an account," to="/login" textLink="Login" />
    </>
}