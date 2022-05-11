import React from 'react'
import { Navigate, useLocation, Outlet } from "react-router-dom";

export function isAdmin() {
    const Token = sessionStorage.getItem("user");
    const isadmin = sessionStorage.getItem("email");
    if(Token && isadmin=="Admin")
        return true;

    return false;
}

function AdminPrivateRoute() {
    const isAuth = isAdmin();
    const location = useLocation();
    if (!isAuth) {
      return (
        <Navigate
          to="/login"
          replace
          state={{ from: location }}
        />
      );
    }else{
        return <Outlet/>
    }
}

export default AdminPrivateRoute