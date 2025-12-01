import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getCookie } from '@/utils/cookieUtils';

export default function ProtectedRoute() {
    const token = getCookie('accessToken');
    if (!token) return <Navigate to="/login" replace />;
    return <Outlet />;
};


