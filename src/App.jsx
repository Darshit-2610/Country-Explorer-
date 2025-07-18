import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout";


import "./App.css";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Country from "./pages/Country";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "country",
        element: <Country />,
      },
      {
        path: "conatct",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
