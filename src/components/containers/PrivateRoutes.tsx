import { Navigate } from "react-router-dom";
import useAuthCheck from "../../hooks/useAuthCheck";
import Loading from "../loading/Loading";

interface Props {
  component: React.ReactNode;
}
function PrivateRoutes({ component }: Props) {
  const { user, checkingAuth } = useAuthCheck();

  if (checkingAuth) return <Loading />;
  if (user) return component;
  return <Navigate to="/login" />;
}

export default PrivateRoutes;
