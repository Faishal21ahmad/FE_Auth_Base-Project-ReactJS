import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TitleDashboardProvider } from "@/contexts/TitleDashboardContext";
import { AppLayout, DashboardLayout, AuthLayout } from '@/components/layouts/Layout';
import { SubLayoutProfile, SubLayoutSetting } from '@/components/layouts/subLayout/subLayout';
import Home from '@/pages/app/Home';
import ErrorPage from '@/pages/ErrorPage';
import { GuestRoute, ProtectedRoute } from '@/middleware/midddleware';
import { Login, Register, ForgotPassword, ResetPassword } from '@/pages/auth/Auth';
import { Dashboard, Profile, Setting, Products, Transaction } from '@/pages/dashboard/index';
import { H1 } from '@/components/elements/heading/index';

export default function App() {
  return <Router>
    <Routes>
      <Route element={<GuestRoute />}>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/auth/reset-password" element={<ResetPassword />} />
        </Route>
      </Route>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/detailproduct" element={<H1>Product Page</H1>} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route element={<TitleDashboardProvider />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/transaction" element={<Transaction />} />

            <Route element={<SubLayoutSetting />}>
              <Route path="/setting" element={<Setting />} />
              <Route path="/setting/setting2" element={<H1>Settings Page2</H1>} />
              <Route path="/setting/setting3" element={<H1>Settings Page3</H1>} />
            </Route>

            <Route element={<SubLayoutProfile />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/profile2" element={<H1>Product Page2</H1>} />
              <Route path="/profile/profile3" element={<H1>Product Page3</H1>} />
            </Route>
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<ErrorPage status={404} />} />
    </Routes>
  </Router>
}