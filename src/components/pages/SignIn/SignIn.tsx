import { Input, Checkbox, Button, Form } from "antd";
import Title from "antd/es/typography/Title";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase-config";
import { useState } from "react";

const SignIn = () => {
  const navigator = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (!credential) {
        console.error("Error in user Credential");
        return;
      }
      const token = credential.accessToken;
      const user = result.user;
      console.log(user, token);
      localStorage.setItem("token", `${token}`);
      localStorage.setItem("user", JSON.stringify(result.user));
      navigator("/");

      console.log(result);
    } catch (error: any) {
      console.error(error);
    }
  };
  return (
    <div style={{ height: "100vh", width: "100%", display: "flex" }}>
      <div style={{ flex: 1 }}></div>
      <div style={{ flex: 1 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Title level={2}>Sign In</Title>
          <Form
            name="basic"
            layout="vertical"
            style={{ width: "70%" }}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input size="large" type="email" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password size="large" />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button
                loading={isLoading}
                style={{ backgroundColor: "#000000" }}
                size="large"
                type="primary"
                htmlType="submit"
                block
              >
                Sign In
              </Button>
            </Form.Item>

            <Form.Item>
              <GoogleButton onClick={handleSignInWithGoogle} />
            </Form.Item>
          </Form>

          <Link to={"/signup"}>Don't have an account?</Link>
        </div>
      </div>
      <div style={{ flex: 1 }}></div>
    </div>
  );
};

export default SignIn;
