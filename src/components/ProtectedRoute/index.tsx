import { Navigate, Outlet } from "react-router-dom";
import { ProtectedRouteProps } from "./types";
import { toast } from "react-toastify";

export default function ProtectedRoute({ isLogged }: ProtectedRouteProps) {
  if (!isLogged) {
    toast.warning("Você precisa estar logado para visitar essa página", {
      toastId: "login",
    });
    return <Navigate to="/" />;
  }

  return <Outlet />;
}
