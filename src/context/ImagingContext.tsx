import type { ImagingRecord } from "@/types/Imaging";
import { createContext } from "react";

interface ImagingContextModel {
  records: ImagingRecord[];
  isDataLoading: boolean;
}

const defaultValues: ImagingContextModel = {
  records: [],
  isDataLoading: false,
};

const ImagingContext = createContext(defaultValues);

export default ImagingContext;
