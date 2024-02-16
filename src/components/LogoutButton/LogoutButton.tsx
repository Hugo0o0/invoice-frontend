import useAuth from "@/utils/hooks/useAuth";
import { Button } from "../UI";

const LogoutButton = () => {
  const { logout } = useAuth();
  return (
    <Button
      className="absolute top-1 right-3"
      variant="danger"
      onClick={logout}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
