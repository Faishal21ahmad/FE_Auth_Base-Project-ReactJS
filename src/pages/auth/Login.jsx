import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { setCookie } from '@/utils/cookieUtils';
import { useAuthMessage } from '@/contexts/AuthMessageContext';
import { useDataUser } from "@/contexts/DataUserContext";
import { jwtDecode } from "jwt-decode";
import InputTxt from '@/components/elements/input/Inputtxt';
import CardAuth from '@/components/fragments/card/CardAuth';
import HeaderAuth from '@/components/ui/auth/HeaderAuth';
import FooterLink from '@/components/ui/auth/FooterLink';
import Button from '@/components/elements/button/Button';
import Auth from '@/services/api/authService';

export default function Login() {
    const { setUserDataDirect } = useDataUser();
    const { message, setMessage, success, setSuccess, loading, setLoading } = useAuthMessage();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlelogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const credentials = { email, password };
            const res = await Auth.login(credentials);

            const decoded = jwtDecode(res.token);
            setCookie("accessToken", res.token, decoded.exp);
            setUserDataDirect(decoded);
            setSuccess(true);
            navigate("/dashboard");
        } catch (error) {
            setSuccess(false);
            setMessage(error.response?.data?.message || 'Error Service');
        } finally {
            setLoading(false);
        }
    }

    return <>
        <CardAuth>
            <HeaderAuth title="Login" message={message} success={success} />
            <form onSubmit={handlelogin}>
                <InputTxt id="email" type="email" value={email}
                    onChange={setEmail} placeholder="fureya@example.com" label="Email" />
                <InputTxt id="password" type="password" value={password}
                    onChange={setPassword} placeholder="********" label="Password" />
                <div className="">
                    <Link to="/forgot-password" className="text-sm text-blue-700 hover:underline float-right mr-2">Forgot Password?</Link>
                </div>
                <Button type="submit" color="stone" disabled={loading} fullWidth className="mt-4">{loading ? 'Loading...' : 'Submit'}</Button>
            </form>
        </CardAuth>
        <div className="text-center mt-4 space-y-2">
            <FooterLink text="You don't have an account, please" to="/register" textLink="Register" />
            <FooterLink text="Back to Home" to="/" textLink="Back" />
        </div>
    </>
}