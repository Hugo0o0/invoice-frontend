import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import Invoice from "@/pages/Invoice";
import GlobalErrorPage from "@/components/GlobalErrorPage/GlobalErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <GlobalErrorPage />,
  },

  {
    path: "/invoices/:id",
    element: <Invoice />,
    errorElement: <GlobalErrorPage />,
  },
  {
    path: "*",
    errorElement: <GlobalErrorPage />,
  },
]);

export default router;
