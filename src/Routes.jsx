import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { CharactersListPage } from "./pages/personagensSection/CharactersListPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/personagens",
        element: <CharactersListPage />,
    },
    {
        path: "/resumo",
        element: <CharactersListPage />,
    },
    {
        path: "/dragoes",
        element: <CharactersListPage />,
    },
]);