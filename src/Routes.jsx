import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Personagens } from "./pages/Personagens";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/personagens",
        element: <Personagens />,
    },
    {
        path: "/resumo",
        element: <Personagens />,
    },
    {
        path: "/dragoes",
        element: <Personagens />,
    },
]);