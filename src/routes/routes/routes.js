import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Login from "../../login/Login/Login";
import Register from "../../login/Register/Register";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  }
])