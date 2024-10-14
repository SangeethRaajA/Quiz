import { Breadcrumb, Button } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import { HomeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase-config";

const Dashboard = () => {
  // const user = JSON.parse(localStorage.getItem('user'));
  const user = JSON.parse(`${localStorage.getItem("user")}`);
  const navigator = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigator("/signin");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Content
      style={{
        padding: "0 48px",
        height: "calc(100vh - 64px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: "center"
      }}
    >
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item onClick={() => null}>
          <HomeOutlined /> Dashboard
        </Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ height: "100%" }}>
        <h1>Welcome to Programming Quiz</h1>
        <hr />
        <h2>{user && user.email}</h2>
        {user && <img src={user.photoURL} alt="profile" />}
        <hr />
        <Button onClick={handleLogout} className="">
          Logout
        </Button>
      </div>
      <Footer style={{ textAlign: "center" }}>
        Programming Quiz © {new Date().getFullYear()}
      </Footer>
    </Content>
  );
};

export default Dashboard;
