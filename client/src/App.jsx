import "@fontsource/plus-jakarta-sans/300.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/800.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Root from "@/common/layouts/Root.jsx";
import Servers from "@/pages/Servers";
import "@/common/styles/main.sass";
import Settings from "@/pages/Settings";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root />,
            children: [
                { path: "/", element: <Navigate to="/servers" /> },
                { path: "/servers", element: <Servers /> },
                { path: "/settings", element: <Settings/> },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;