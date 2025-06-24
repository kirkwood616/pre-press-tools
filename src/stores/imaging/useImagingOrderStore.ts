import type { ImagingRecord, Status } from "@/types/Imaging";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const initialOrderState: ImagingRecord = {
  id: undefined,
  order: "",
  due: "",
  status: "pending",
  setups: [],
  notes: [],
  statusLog: [],
};

type State = {
  record: ImagingRecord;
};

type Actions = {
  resetRecord: () => void;
  setRecord: (state: ImagingRecord) => void;
  setOrderNumber: (orderNum: string) => void;
  setDue: (dueDate: string) => void;
  setStatus: (status: Status) => void;
  setChecked: (index: number) => void;
  setCheckedAll: () => void;
};

export const useImagingOrderStore = create<State & Actions>()(
  immer((set) => ({
    record: initialOrderState,
    resetRecord: () => set(() => initialOrderState),
    setRecord: (payload: ImagingRecord) =>
      set((state) => {
        state.record = payload;
      }),
    setOrderNumber: (orderNum) =>
      set((state) => {
        state.record.order = orderNum;
      }),
    setDue: (dueDate) =>
      set((state) => {
        state.record.due = dueDate;
      }),
    setStatus: (status) =>
      set((state) => {
        state.record.status = status;
      }),
    setChecked: (index) =>
      set((state) => {
        state.record.setups[index].isChecked =
          !state.record.setups[index].isChecked;
      }),
    setCheckedAll: () =>
      set((state) => {
        state.record.setups.forEach(
          (item) => (item.isChecked = !item.isChecked)
        );
      }),
  }))
);
