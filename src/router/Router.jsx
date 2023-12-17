import { createBrowserRouter } from "react-router-dom";
import ProfileLayout from "../layout/ProfileLayout";
import Root from "../layout/Root";
import RegisterLayout from "../layout/registerLayout/RegisterLayout";
import Birthday from "../pages/birthday/Birthday";
import Documents from "../pages/docs/Documents";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Profile from "../pages/profile/Profile";
import Register from "../pages/register/Register";
import Chats from "../pages/sidebarPages/chats/Chats";
import FeedPages from "../pages/sidebarPages/feedPage/FeedPages";
import Groups from "../pages/sidebarPages/groups/Groups";
import JobsPages from "../pages/sidebarPages/jobs/JobsPages";
import Videos from "../pages/sidebarPages/videos/Videos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/feedPages", element: <FeedPages /> },
      { path: "/chats", element: <Chats /> },
      { path: "/groups", element: <Groups /> },
      { path: "/jobsPages", element: <JobsPages /> },
      { path: "/videos", element: <Videos /> },
      { path: "/birthday", element: <Birthday /> },
    ],
  },

  {
    path: "/",
    element: <ProfileLayout />,
    children: [{ path: "/profile", element: <Profile /> }],
  },

  {
    path: "/auth",
    element: <RegisterLayout />,
    children: [
      { path: "/auth/register", element: <Register /> },
      { path: "/auth/login", element: <Login /> },
      { path: "/auth/docs", element: <Documents /> },
    ],
  },
]);

export default router;
