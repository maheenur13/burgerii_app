"use client";

import React, { ReactNode, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import styled from "styled-components";

const { Header, Sider, Content } = Layout;

type PropsType = {
  children: ReactNode;
};

export const AdminLayout: React.FC<PropsType> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer,borderRadiusLG },
  } = theme.useToken();

  return (
    <LayoutWrapper>
      <Layout
        style={{
          height: "100vh",
        }}
      >
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="px-2 py-3 text-center bg-slate-300 text-gray-950">
            Burgerii
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "Dashboard",
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "Orders",
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "Buying",
              },
              {
                key: "4",
                icon: <UploadOutlined />,
                label: "Selling",
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              overflowY: "auto",
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  .ant-menu {
    /* padding: 0 !important; */
    .ant-menu-item {
      /* width: 100%; */
      /* border-radius: 0 !important; */
      /* margin: 0; */
    }
  }
`;
