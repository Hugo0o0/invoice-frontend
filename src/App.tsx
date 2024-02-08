import { RouterProvider } from "react-router-dom";
import router from "@/routes/router";
import Sidebar from "@/components/Sidebar/Sidebar";

const App = () => {
  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      <Sidebar />
      <div className="w-full">
        <RouterProvider router={router} />
      </div>
    </main>
  );
};

export default App;
