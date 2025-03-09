import { Layout as AntdLayout, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import React from 'react';

import { useAppContext } from '@src/provider';
import { LogoutModal } from './logout-modal';

const { Header, Content, Footer } = AntdLayout;

export const Layout = () => {
  const { user } = useAppContext();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <AntdLayout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="text-2xl font-bold tracking-wide text-white hover:text-gray-300 transition">
          Frontend
        </div>
        <div className="flex flex-grow justify-between ms-8">
          <div className="flex justify-center items-center text-lg text-gray-300 bg-gray-800 px-4 shadow-md">
            Welcome Back [ {user?.name} ]
          </div>
          <div>
            <LogoutModal />
          </div>
        </div>
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <div
          style={{
            padding: 24,
            minHeight: 600,
            borderRadius: borderRadiusLG,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </AntdLayout>
  );
};
