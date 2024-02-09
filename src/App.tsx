import { RouterProvider } from "react-router-dom";
import router from "@/routes/router";
import Sidebar from "@/components/Sidebar/Sidebar";

const App = () => {
  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      <Sidebar />
      <div className="w-full flex justify-center">
        <div className="lg:w-[73rem] w-[32.7rem] md:w-[67.2rem] mt-[5rem] md:mt-[8rem]">
          <RouterProvider router={router} />
        </div>
      </div>
    </main>
  );
};

export default App;
