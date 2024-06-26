import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Personagens } from "./Personagens";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/personagens",
        element: <Personagens />,
    },
]);