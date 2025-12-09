import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }: { children: ReactNode }) => {
  return localStorage.getItem('access_trendify_token') ? <Navigate to='/' replace /> : children;
}

export default PublicRoute;
