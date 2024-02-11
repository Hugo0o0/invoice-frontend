import { useState } from "react";
import InputGroup from "../InputGroup/InputGroup";
import { Button } from "../UI";
import useAuth from "@/utils/hooks/useAuth";
import { SignupUser } from "@/utils/@types/types";

const Signup = () => {
  const [userInfo, setUserInfo] = useState<SignupUser>({
    email: "",
    password: "",
    name: "",
  });
  const { signup } = useAuth();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signup(userInfo);
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
        name="password"
        value={userInfo.password}
        onChange={handleChange}
      />
      <InputGroup
        label="Name"
        type="text"
        placeholder="Name eg.Ahmet"
        name="name"
        value={userInfo.name}
        onChange={handleChange}
      />

      <Button>Signup</Button>
    </form>
  );
};

export default Signup;
