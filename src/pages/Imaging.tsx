import PageHeader from "@/components/ui/headers/PageHeader";
import SectionHeader from "@/components/ui/headers/SectionHeader";
import ImagingNav from "@/features/imaging/nav/ImagingNav";
import { db } from "@/firebase";
import { useImagingRecordsStore } from "@/stores/imaging/useImagingRecordsStore";
import type { ImagingRecord } from "@/types/Imaging";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import styles from "./Imaging.module.css";

function Imaging() {
  const { setRecords } = useImagingRecordsStore();

  useEffect(() => {
    const imagingRecordsRef = collection(db, "imaging");

    const unsubscribe = onSnapshot(
      imagingRecordsRef,
      (snapshot) => {
        const list = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setRecords(list as ImagingRecord[]);
      },
      (error) => {
        console.error(error);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <>
      <PageHeader title={"IMAGING"} />

      <SectionHeader>
        <ImagingNav />
      </SectionHeader>

      <div className={styles.Imaging}>
        <Outlet />
      </div>
    </>
  );
}

export default Imaging;
