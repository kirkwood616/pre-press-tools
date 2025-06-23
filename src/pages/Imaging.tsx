import PageHeader from "@/components/ui/headers/PageHeader";
import SectionHeader from "@/components/ui/headers/SectionHeader";
import ImagingContextProvider from "@/context/ImagingContextProvider";
import ImagingNav from "@/features/imaging/nav/ImagingNav";
import useLocationRoutes from "@/hooks/useLocationRoutes";
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
        <SectionHeader>
          <ImagingNav />
        </SectionHeader>
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
