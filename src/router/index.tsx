import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import HomePage from "../pages/HomePage";
import SetupPage from "../pages/SetupPage";
import PracticePage from "../pages/PracticePage";
import ResultPage from "../pages/ResultPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/setup",
        element: <SetupPage />,
      },
      {
        path: "/practice",
        element: <PracticePage />,
      },
      {
        path: "/result",
        element: <ResultPage />,
      },
    ],
  },
]);