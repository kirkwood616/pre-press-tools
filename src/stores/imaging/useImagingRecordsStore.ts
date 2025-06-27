import type { ImagingRecord } from "@/types/Imaging";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const initialRecordsState: ImagingRecord[] = [];

interface RecordsState {
  records: ImagingRecord[];
  setRecords: (state: ImagingRecord[]) => void;
}

export const useImagingRecordsStore = create<RecordsState>()(
  immer((set) => ({
    records: initialRecordsState,
    setRecords: (payload: ImagingRecord[]) =>
      set((state) => {
        state.records = payload;
      }),
  }))
);
