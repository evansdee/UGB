import { useEffect } from "react";
import { useLocalUser } from "../hooks/UserDetails";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { value } = useLocalUser();
  const navigate = useNavigate();
  const { isAuthenticated } = value;

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/login");
    },
    [isAuthenticated, navigate]
  );

  console.log(isAuthenticated);

  if (isAuthenticated) return children;
}
