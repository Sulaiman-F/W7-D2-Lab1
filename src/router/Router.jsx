import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router";
import Nav from "../componetn/Nav";
import Footer from "../componetn/Footer";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Bmi from "../pages/Bmi";
function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to="/login" />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Layout />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: "/bmi",
    element: <Layout />,
    children: [{ index: true, element: <Bmi /> }],
  },
]);
function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
