import { createContext } from "react";
import type { ImagingRecord } from "../types/Imaging";

interface ImagingContextModel {
  records: ImagingRecord[];
}

const defaultValues: ImagingContextModel = {
  records: [],
};

const ImagingContext = createContext(defaultValues);

export default ImagingContext;
