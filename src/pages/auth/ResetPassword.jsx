import { useState } from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuthMessage } from '@/contexts/AuthMessageContext';
import InputTxt from '@/components/elements/input/Inputtxt';
import CardAuth from '@/components/fragments/card/CardAuth';
import HeaderAuth from '@/components/ui/auth/HeaderAuth';
import Button from '@/components/elements/button/Button';
import Auth from '@/services/api/authService';

export default function ResetPassword() {
    const { message, setMessage, success, setSuccess, loading, setLoading } = useAuthMessage();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');
    const [password, setPassword] = useState('');
    const [passwordConfrim, setPasswordConfrim] = useState('');

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const userData = {
                token,
                password,
                password_confrim: passwordConfrim
            };
            const res = await Auth.resetPassword(userData);

            setSuccess(true);
            setMessage(res.message);
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
            <HeaderAuth title="Reset Password" message={message} success={success} />
            <form onSubmit={handleResetPassword}>
                <InputTxt id="password" type="password" value={password} onChange={setPassword} label="New Password" placeholder="**********" />
                <InputTxt id="passwordConfrim" type="password" value={passwordConfrim} onChange={setPasswordConfrim} label="New Password Confrim" placeholder="**********" />
                <Button type="submit" color="stone" disabled={loading} fullWidth className="mt-4">{loading ? 'Loading...' : 'Submit'}</Button>
            </form>
        </CardAuth>
    </>
}