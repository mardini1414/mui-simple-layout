import { BarChart, PersonOutline, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react';

export const SIDEBAR_WIDTH = 300;

export type SideBarMenuType = {
  label: string;
  icon?: React.ReactNode;
  path: string;
  children?: SideBarMenuType[];
};

const sidebarMenu: SideBarMenuType[] = [
  {
    label: 'Dashboard',
    icon: <BarChart />,
    path: '/',
  },
  {
    label: 'User Management',
    icon: <PersonOutline />,
    path: '/users',
    children: [
      {
        label: 'Admin',
        path: '/users/admin-management',
      },
      {
        label: 'Customer',
        path: '/users/customer-management',
      },
    ],
  },
  {
    label: 'Product',
    icon: <ShoppingCartOutlined />,
    path: '/products',
  },
];

export { sidebarMenu };
