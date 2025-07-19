import { createRoot } from "react-dom/client";
import "./styles/global.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Animal from "./pages/Animal.jsx";
import TodoList from "./pages/TodoList.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout.jsx";
import AnimalMain from "./pages/AnimalMain.jsx";
import AnimalDetail from "./pages/AnimalDetail.jsx";
import AnimalSearch from "./pages/AnimalSearch.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, //부모 컴포넌트
    children: [
      { path: "/", element: <Home /> },
      { path: "/todo", element: <TodoList /> },
      {
        path: "/animal",
        element: <Animal />,
        children: [
          { index: true, element: <AnimalMain /> },
          { path: "detail/:id", element: <AnimalDetail /> },
          { path: "search", element: <AnimalSearch /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
