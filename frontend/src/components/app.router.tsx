import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { AuthWrapper, Layout } from '.';
import { useAuth } from '@src/hooks';

const DashboardPage = lazy(() => import('../pages/dashboard'));
const AuthPage = lazy(() => import('../pages/auth'));

const AppRoutes = () => {
  useAuth();

  return (
    <Routes>
      <Route
        element={
          <AuthWrapper.Guard>
            <Layout />
          </AuthWrapper.Guard>
        }
      >
        <Route path="/" element={<DashboardPage />} />
      </Route>
      <Route element={<AuthWrapper.Public />}>
        <Route path="/auth" element={<AuthPage />} />
      </Route>
    </Routes>
  );
};

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};
