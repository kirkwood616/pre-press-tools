import { useLocation, useParams, type Params } from "react-router-dom";

export default function useLocationRoutes() {
  const location = useLocation();
  const pathName: string = location.pathname;
  const isLocation = (path: string) => pathName.includes(path);
  const isPath = (path: string): boolean => location.pathname === path;
  const isSubPath = (path: string): boolean =>
    location.pathname.startsWith(`/${path}`);
  const params: Readonly<Params<string>> = useParams();
  const idParams: string | undefined = params.id;

  return { location, isLocation, isPath, isSubPath, idParams };
}
