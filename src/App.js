import { RouterProvider } from "react-router-dom";
import router from "./router/Router.jsx";
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
