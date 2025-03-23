import App from "@/App";
import FoldersPage from "@/pages/FoldersPage";
import HomePage from "@/pages/HomePage";
import { createBrowserRouter, Navigate } from "react-router-dom";

export const PSYCHONOTE_BASE_URL = "/psychonote";
export const PSYCHONOTE_FOLDER_URL = "/psychonote/folder/";

export const router = createBrowserRouter([
  {
    path: PSYCHONOTE_BASE_URL,
    element: <App />, // Structure de page commune
    children: [
      { index: true, element: <HomePage /> }, // Page d'accueil
      { path: `${PSYCHONOTE_FOLDER_URL}:id`, element: <FoldersPage /> }, // Page dossier patient
    ],
  },
  { path: "*", element: <Navigate to={PSYCHONOTE_BASE_URL} replace /> }, // Redirection par défaut
]);

export default router;
