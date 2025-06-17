import { Outlet } from "react-router-dom";
import useAuthCheck from "../../hooks/useAuthCheck";
import Sidebar from "../nav/Sidebar";

function UserContainer() {
  const { user } = useAuthCheck();

  return (
    <>
      {user ? <Sidebar /> : <></>}
      <Outlet />
    </>
  );
}

export default UserContainer;
