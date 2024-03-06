import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import FeesScreen from "./screens/Fees.jsx";
import HomeScreen from "./screens/Home.jsx";
import AboutScreen from "./screens/About.jsx";
import FAQScreen from "./screens/FAQ.jsx";
import ContactScreen from "./screens/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomeScreen />,
      },
      {
        path: "about",
        element: <AboutScreen />,
      },
      {
        path: "fees",
        element: <FeesScreen />,
      },
      {
        path: "faq",
        element: <FAQScreen />,
      },
      {
        path: "contact",
        element: <ContactScreen />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
