import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./styles/global.css";
import FoldersPage from "./pages/FoldersPage";

export const PSYCHONOTE_BASE_URL = "/psychonote";
export const PSYCHONOTE_FOLDER_URL = "/psychonote/folder/";

const router = createBrowserRouter([
  {
    path: `${PSYCHONOTE_FOLDER_URL}:id`,
    element: <FoldersPage />,
  },
  {
    path: PSYCHONOTE_BASE_URL,
    element: <HomePage />,
  },
  {
    path: "*",
    element: <Navigate to={PSYCHONOTE_BASE_URL} replace />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<RouterProvider router={router} />);
