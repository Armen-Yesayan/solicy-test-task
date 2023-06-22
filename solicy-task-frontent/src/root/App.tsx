import "react-toastify/dist/ReactToastify.css";

import React from "react";
import { Navigate, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Wrapper from "../common/shared/Wrapper/Wrapper";
import Account from "../pages/Account/Account";
import Accounts from "../pages/Accounts/Accounts";
import CreateAccount from "../pages/CreateAccount/CreateAccount";

const router = createBrowserRouter([
  {
    path: "/accounts",
    element: <Accounts />
  },
  {
    path: "/accounts/:id",
    element: <Account />
  },
  {
    path: "/account/create",
    element: <CreateAccount />
  },
  {
    path: "*",
    element: <Navigate to='/accounts' replace />
  }
]);

function App() {
  return (
    <Wrapper>
      <RouterProvider router={router} />
      <ToastContainer theme={"colored"} />
    </Wrapper>
  );
}

export default App;
