import { useLocation } from "react-router-dom";

export default function useLocationRoutes() {
  const location = useLocation();
  const isPath = (path: string): boolean => location.pathname === path;
  const isSubPath = (path: string): boolean =>
    location.pathname.startsWith(`/${path}`);

  return { location, isPath, isSubPath };
}
