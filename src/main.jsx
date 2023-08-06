import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.scss";
import ErrorPage from "./routes/error.jsx";
import { InvoicePage } from "./routes/invoice.jsx";
import { Root } from "./routes/root.jsx";
import { Home } from "./routes/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "invoice/:invoiceId",
        element: <InvoicePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
