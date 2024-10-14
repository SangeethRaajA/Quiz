import { Layout, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import Navbar from "../components/Layouts/Navbar";

const MainLayout = ({}) => {
    
  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={[
            {
              key: 1,
              label: `Home`,
            },
          ]}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Layout style={{ borderRadius: 10 }}>
        <Navbar />
      </Layout>
    </Layout>
  );
};

export default MainLayout;
