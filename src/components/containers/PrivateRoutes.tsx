import Loading from "@/components/loading/Loading";
import useAuthCheck from "@/hooks/useAuthCheck";
import { Navigate } from "react-router-dom";

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
