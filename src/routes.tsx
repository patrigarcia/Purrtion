import { createBrowserRouter } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import Post from "./components/Post/Post";
import Results from "./components/Results/Results";
import Spinner from "./components/Spinner/Spinner";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/results",
        element: <Results />,
    },
    {
        path: "/spinner",
        element: <Spinner />,
    },
    {
        path: "/blog",
        element: <Blog />,
    },
    {
        path: "/post",
        element: <Post />,
    },
]);

export default router;
