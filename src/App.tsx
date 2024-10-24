import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./views/Home";
import PostDetail from "./views/PostDetail";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="" element={<Home />} />
      <Route path="/postDetails/:objectID" element={<PostDetail />} />
    </Route>,
  ),
  {
    basename: "HN-WebApp",
  },
);
export default Router;
