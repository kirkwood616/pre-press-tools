import { Outlet } from "react-router-dom";
import useLocationRoutes from "../../../hooks/useLocationRoutes";
// import { records } from "../../../utils/TestData";
import { useEffect, useState } from "react";
import { getAllRecords } from "../../../services/imagingServices";
import type { ImagingRecord } from "../../../types/Imaging";
import styles from "./ImagingList.module.css";
import ImagingTable from "./ImagingTable";

interface Props {}

function ImagingList({}: Props) {
  const [records, setRecords] = useState<ImagingRecord[]>([]);
  const { idParams } = useLocationRoutes();

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    try {
      const recordsData = await getAllRecords();
      setRecords(recordsData as ImagingRecord[]);
    } catch (error) {
      console.error("Failed to load records.", error);
    }
  };

  return (
    <div className={styles.ImagingList}>
      {idParams ? (
        <Outlet context={records} />
      ) : (
        <ImagingTable data={records as ImagingRecord[]} />
      )}
    </div>
  );
}

export default ImagingList;
