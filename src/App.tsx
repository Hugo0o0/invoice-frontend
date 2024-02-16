import { RouterProvider } from "react-router-dom";
import router from "@/routes/router";
import Sidebar from "@/components/Sidebar/Sidebar";
import AuthModal from "./components/Auth/AuthModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "./utils/hooks/useAuth";
import LogoutButton from "./components/LogoutButton/LogoutButton";

const App = () => {
  const { user } = useAuth();

  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {user ? (
        <>
          <Sidebar />
          <div className="w-full flex justify-center">
            <div className="lg:w-[73rem] w-[32.7rem] md:w-[67.2rem] mt-[5rem] md:mt-[8rem]">
              <RouterProvider fallbackElement={<p>hello</p>} router={router} />
            </div>
          </div>
        </>
      ) : (
        <AuthModal />
      )}
    </main>
  );
};

export default App;
