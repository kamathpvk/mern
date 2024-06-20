import "./App.css";
import AddUser from "./adduser/AddUser";
import User from "./getuser/User";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Update from "./updateuser/Update";
import Login from "./login/Login";
import Register from "./register/Register";
import { useState } from "react";
import ProtectedRoute from "./ProtectedRoute";
import NavBar from "./NavBar";

function App() {
  const [user, setLoginUser] = useState([]);

  const route = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute user={user}>
          <User />
        </ProtectedRoute>
      ),
    },
    {
      path: "/login",
      element: <Login setLoginUser={setLoginUser} />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/add",
      element: <AddUser />,
    },
    {
      path: "/update/:id",
      element: <Update />,
    },
  ]);
  return (
    <div className="App">
      <NavBar />
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
