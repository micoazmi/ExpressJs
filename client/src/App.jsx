import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,Outlet
} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import Profile from './pages/Profile';

const Root = () => (
  <div>
    <Navbar />
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
