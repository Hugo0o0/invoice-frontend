import { useState } from "react";
import InputGroup from "../InputGroup/InputGroup";
import { Button } from "../UI";
import useAuth from "@/utils/hooks/useAuth";
import { LoginUser } from "@/utils/@types/types";

const Login = () => {
  const [userInfo, setUserInfo] = useState<LoginUser>({
    email: "",
    password: "",
  });
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(userInfo);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10 justify-end">
      <InputGroup
        label="Email"
        type="email"
        placeholder="Email"
        name="email"
        value={userInfo.email}
        onChange={handleChange}
      />
      <InputGroup
        label="Password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        name="password"
        value={userInfo.password}
      />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default Login;
