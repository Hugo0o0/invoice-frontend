import { useState } from "react";
import { Switch } from "../UI";
import Modal from "../UI/Modal/Modal";
import Login from "./Login";
import Signup from "./Signup";

const AuthModal = () => {
  const [type, setType] = useState<"login" | "signup">("login");

  const authType = type === "login" ? <Login /> : <Signup />;

  return (
    <Modal closeOnOverlayClick={false} isOpen={true}>
      <Modal.Content>
        <div className="flex items-center gap-4 text-detail  py-10 px-10 justify-center">
          <p className="text-md font-bold">Login</p>
          <Switch
            checked={type !== "login"}
            onChange={() => setType(type === "login" ? "signup" : "login")}
          />
          <p className="text-md font-bold">Signup</p>
        </div>
        {authType}
      </Modal.Content>
    </Modal>
  );
};

export default AuthModal;
