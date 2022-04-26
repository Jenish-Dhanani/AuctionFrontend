import { Navigate, useLocation, Outlet } from "react-router-dom";

export function isAuthenticated() {
  const Token = sessionStorage.getItem("user");
  return Token? true:false
}

const PrivateRouter = () => {
  const isAuth = isAuthenticated();
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

};

export {PrivateRouter}