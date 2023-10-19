import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BooksList from "./pages/book/BooksList";
import CreateBook from "./pages/book/CreateBook";
import ViewBook from "./pages/book/ViewBook";
import EditBook from "./pages/book/EditBook";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/books", element: <BooksList /> },
      { path: "/books/create", element: <CreateBook /> },
      { path: "/books/:bookId", element: <ViewBook /> },
      { path: "/books/:bookId/edit", element: <EditBook /> },
      { path: "/admin", element: <div>Admin</div> },
      { path: "/account", element: <div>Account</div> },
    ],
  },
]);

//JSX
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
