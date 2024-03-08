import React, { useState } from "react";
import {
  ApartmentOutlined,
  LogoutOutlined,
  ReadOutlined,
  LockOutlined,
  SettingOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import CreateCourse from "./components/Course/CreateCourse/CreateCourse";
import CreateClass from "./components/Class/CreateClass/CreateClass";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Course", "1", <ReadOutlined />),
  getItem("Class", "2", <ApartmentOutlined />),
  getItem("Setting", "sub1", <SettingOutlined />, [
    getItem("Profile", "3", <ProfileOutlined />),
  ]),
  getItem("Authentication", "sub2", <LockOutlined />, [
    getItem("Forgot password", "4"),
    getItem("Reset password", "5"),
  ]),
  getItem("Log out", "9", <LogoutOutlined />),
];

const Admin = () => {
  const [breadcrumb, setBreadcrumb] = useState([]);

  const [menuItem, setMenuItem] = useState(null);

  const handleMenuClick = (e) => {
    const { key } = e;
    setMenuItem(key);

    switch (key) {
      case "1":
        setBreadcrumb(["Course"]);
        break;
      case "2":
        setBreadcrumb(["Class"]);
        break;
      case "3":
        setBreadcrumb(["Setting", "Profile"]);
        break;
      case "4":
        setBreadcrumb(["Authentication", "Forgot password"]);
        break;
      case "5":
        setBreadcrumb(["Authentication", "Reset password"]);
        break;
      default:
        setBreadcrumb([]);
    }
  };

  const renderComponent = () => {
    switch (menuItem) {
      case "1":
        return <CreateCourse />;
      case "2":
        return <CreateClass />;
      default:
        return null;
    }
  };
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            {breadcrumb.map((item, index) => (
              <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
            ))}
          </Breadcrumb>

          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {renderComponent()}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Rikkei Education © {new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Admin;
