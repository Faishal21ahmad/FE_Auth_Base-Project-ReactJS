import { useState } from 'react';
import InputTxt from '@/components/elements/input/Inputtxt';
import CardAuth from '@/components/fragments/card/CardAuth';
import HeaderAuth from '@/components/ui/auth/HeaderAuth';
import FooterLink from '@/components/ui/auth/FooterLink';
import Button from '@/components/elements/button/Button';
import Auth from '@/services/api/authService';
import { useAuthMessage } from '@/contexts/AuthMessageContext';

export default function ForgotPassword() {
    const { message, setMessage, success, setSuccess, loading, setLoading } = useAuthMessage();
    const [email, setEmail] = useState('');

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const userData = { email };
            const res = await Auth.forgotPassword(userData);

            setSuccess(true)
            setMessage(res.message)
            setEmail('')
        } catch (error) {
            setSuccess(false);
            setMessage(error.response?.data?.message || 'Error Service');
        } finally {
            setLoading(false);
        }
    }

    return <>
        <CardAuth>
            <HeaderAuth title="Forgot Password" message={message} success={success} />
            <form onSubmit={handleForgotPassword}>
                <InputTxt id="email" type="email" value={email} onChange={setEmail} label="Email" placeholder="fureya@example.com" />
                <Button type="submit" color="stone" disabled={loading} fullWidth className="mt-4">{loading ? 'Loading...' : 'Submit'}</Button>
            </form>
        </CardAuth>
        <FooterLink text="Do You Remember the Password?" to="/login" textLink="Login" />
    </>
}