import Sidebar from "@/components/nav/Sidebar";
import useAuthCheck from "@/hooks/useAuthCheck";
import { Outlet } from "react-router-dom";

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
