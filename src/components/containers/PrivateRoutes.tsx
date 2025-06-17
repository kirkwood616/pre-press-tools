import { Navigate } from "react-router-dom";
import useAuthCheck from "../../hooks/useAuthCheck";

interface Props {
  component: React.ReactNode;
}
function PrivateRoutes({ component }: Props) {
  const { user, checkingAuth } = useAuthCheck();

  // if (checkingAuth) return <Loading />;
  if (checkingAuth) return <>LOADING</>;
  if (user) return component;
  return <Navigate to="/login" />;
}

export default PrivateRoutes;
