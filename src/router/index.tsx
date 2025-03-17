import { lazy } from 'react';
import { Route, Routes } from 'react-router';

import { DashboardLayout } from '../components/layout/main/DashboardLayout';

const DashboardPage = lazy(() => import('../modules/dashboard/pages'));
const AdminManagementPage = lazy(() => import('../modules/users/pages/admin'));
const CustomerManagementPage = lazy(() => import('../modules/users/pages/customer'));
const ProductPage = lazy(() => import('../modules/product/pages'));
const ProductCreatePage = lazy(() => import('../modules/product/pages/create'));

const Router = () => (
  <Routes>
    <Route element={<DashboardLayout />}>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/users/admin-management" element={<AdminManagementPage />} />
      <Route path="/users/customer-management" element={<CustomerManagementPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/products/create" element={<ProductCreatePage />} />
    </Route>
  </Routes>
);

export default Router;
