import { createContext } from "react";
import type { ImagingRecord } from "../types/Imaging";

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
