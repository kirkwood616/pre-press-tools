import PageHeader from "@/components/headers/PageHeader";
import SectionHeaderNav from "@/components/nav/SectionHeaderNav";
import ImagingContextProvider from "@/context/ImagingContextProvider";
import useLocationRoutes from "@/hooks/useLocationRoutes";
import { sections } from "@/types/Imaging";
import { Outlet } from "react-router-dom";
import styles from "./Imaging.module.css";

function Imaging() {
  const { idParams } = useLocationRoutes();

  return (
    <>
      <PageHeader title={"IMAGING"} />
      {idParams ? (
        ""
      ) : (
        <SectionHeaderNav sections={sections} basePath="imaging" />
      )}
      <div className={styles.Imaging}>
        <ImagingContextProvider>
          <Outlet />
        </ImagingContextProvider>
      </div>
    </>
  );
}

export default Imaging;
