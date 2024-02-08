import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import Invoice from "@/pages/Invoice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/invoice/:id",
    element: <Invoice />,
  },
]);

export default router;
