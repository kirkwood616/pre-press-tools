import { useLocation, useParams, type Params } from "react-router-dom";

export default function useLocationRoutes() {
  const location = useLocation();
  const pathName: string = location.pathname;
  const endPathName: string = pathName.slice(
    pathName.lastIndexOf("/") + 1,
    pathName.length
  );
  const params: Readonly<Params<string>> = useParams();
  const idParams: string | undefined = params.id;
  const isLocation = (path: string) => pathName.includes(path);
  const isPath = (path: string): boolean => location.pathname === path;
  const isSubPath = (path: string): boolean =>
    location.pathname.startsWith(`/${path}`);
  const getSectionNoParams = () => {
    const noParams = pathName.slice(0, location.pathname.lastIndexOf("/"));
    return noParams.slice(noParams.lastIndexOf("/") + 1, noParams.length);
  };

  return {
    location,
    isLocation,
    isPath,
    isSubPath,
    getSectionNoParams,
    idParams,
    pathName,
    endPathName,
    params,
  };
}
