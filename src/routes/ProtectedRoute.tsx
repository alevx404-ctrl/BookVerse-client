import type { ReactNode } from "react"; 
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface Props {
  children: ReactNode; // Replaced JSX.Element with ReactNode
}

export default function ProtectedRoute({ children }: Props) {
  const { token, loading } = useAuth();

  if (loading) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>; // Wrapped in a fragment to ensure safe JSX return typing
}