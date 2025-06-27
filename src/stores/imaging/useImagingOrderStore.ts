import type { ImagingRecord } from "@/types/Imaging";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const initialOrderState: ImagingRecord = {
  id: undefined,
  order: "",
  due: "",
  status: "pending",
  setups: [],
  notes: [],
  statusLog: [],
};

type State = {
  order: ImagingRecord;
};

type Actions = {
  resetOrder: () => void;
  setOrder: (state: ImagingRecord) => void;
  setChecked: (index: number) => void;
  setCheckedAll: () => void;
};

export const useImagingOrderStore = create<State & Actions>()(
  immer((set) => ({
    order: initialOrderState,
    resetOrder: () => set(() => initialOrderState),
    setOrder: (payload: ImagingRecord) =>
      set((state) => {
        state.order = payload;
      }),
    setChecked: (index) =>
      set((state) => {
        state.order.setups[index].isChecked =
          !state.order.setups[index].isChecked;
      }),
    setCheckedAll: () =>
      set((state) => {
        state.order.setups.forEach(
          (item) => (item.isChecked = !item.isChecked)
        );
      }),
  }))
);
