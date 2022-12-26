import { createBrowserRouter } from "react-router-dom";
import ProfileLayout from "../layout/ProfileLayout";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{ path: "/", element: <Home /> }],
  },

  {
    path: "/",
    element: <ProfileLayout />,
    children: [
      { path: "/profile", element: <Profile /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);

export default router;
