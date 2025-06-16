import { useEffect, useState, type ReactNode } from "react";
import { getAllRecords } from "../services/imagingServices";
import type { ImagingRecord } from "../types/Imaging";
import ImagingContext from "./ImagingContext";

interface ImagingContextProviderProps {
  children: ReactNode;
}

export default function ImagingContextProvider({
  children,
}: ImagingContextProviderProps) {
  const [records, setRecords] = useState<ImagingRecord[]>([]);

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
    <ImagingContext.Provider
      value={{
        records,
      }}
    >
      {children}
    </ImagingContext.Provider>
  );
}
