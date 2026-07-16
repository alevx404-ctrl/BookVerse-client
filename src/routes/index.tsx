import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/index';
import Explore from '../pages/Books/index';
import Details from '../pages/Book/index.tsx';
import Login from '../pages/Login/index';
import Register from '../pages/Register/index';
import About from '../pages/About/index';
import Contact from '../pages/Contact/index';
import NotFound from '../pages/NotFound/index';

// Importing your brand new dashboard management views
import Dashboard from '../pages/Dashbord/index';
import AddBook from '../pages/AddBook/index';
import ManageBooks from '../pages/ManageBooks/index';

// Importing the ProtectedRoute component to secure the dashboard routes
import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'books', element: <Explore /> },
      { path: 'books/:id', element: <Details /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },

      // Core Dashboard Management Routes

      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "dashboard/add",
        element: (
          <AdminRoute>
            <AddBook />
          </AdminRoute>
        ),
      },
      {
        path: "dashboard/manage",
        element: (
          <AdminRoute>
            <ManageBooks />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}