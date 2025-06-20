import ImagingContext from "@/context/ImagingContext";
import { getAllRecords } from "@/services/imagingServices";
import type { ImagingRecord } from "@/types/Imaging";
import { useEffect, useState, type ReactNode } from "react";

interface ImagingContextProviderProps {
  children: ReactNode;
}

export default function ImagingContextProvider({
  children,
}: ImagingContextProviderProps) {
  const [records, setRecords] = useState<ImagingRecord[]>([]);
  const [isDataLoading, setIsDataLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    setIsDataLoading(true);
    try {
      const recordsData = await getAllRecords();
      setRecords(recordsData as ImagingRecord[]);
    } catch (error) {
      console.error("Failed to load records.", error);
    } finally {
      setIsDataLoading(false);
    }
  };
  return (
    <ImagingContext.Provider
      value={{
        records,
        isDataLoading,
      }}
    >
      {children}
    </ImagingContext.Provider>
  );
}
