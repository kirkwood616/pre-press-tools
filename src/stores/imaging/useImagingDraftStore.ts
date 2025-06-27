import type { ImagingRecord, Setup, Status } from "@/types/Imaging";
import { arrayMove } from "@/utils/ArrayUtils";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const initialDraftState: ImagingRecord = {
  id: undefined,
  order: "",
  due: "",
  status: "pending",
  setups: [],
  notes: [],
  statusLog: [],
  isLocked: false,
};

const initialSetupState: Setup = {
  setup: "",
  artFile: "",
  screens: 1,
  isChecked: false,
  isFilm: false,
  isAltTemplate: false,
};

type State = {
  draftRecord: ImagingRecord;
};

type Actions = {
  resetDraft: () => void;
  setDraft: (state: ImagingRecord) => void;
  setOrderNumber: (orderNum: string) => void;
  setDue: (dueDate: string) => void;
  setStatus: (status: Status) => void;
  setChecked: (index: number) => void;
  setCheckedAll: () => void;
  setSetupNumber: (setupNum: number | string, index: number) => void;
  setIsFilm: (index: number) => void;
  setArtFile: (artName: string, index: number) => void;
  setScreenCount: (count: number, index: number) => void;
  setIsAltTemplate: (index: number) => void;
  addSetup: () => void;
  deleteSetup: (index: number) => void;
  moveSetupForward: (index: number) => void;
  moveSetupBack: (index: number) => void;
  addNote: () => void;
  deleteNote: (index: number) => void;
  setNote: (note: string, index: number) => void;
  setIsLocked: () => void;
};

export const useImagingDraftStore = create<State & Actions>()(
  immer((set) => ({
    draftRecord: initialDraftState,
    resetDraft: () => set(() => initialDraftState),
    setDraft: (payload: ImagingRecord) =>
      set((state) => {
        state.draftRecord = payload;
      }),
    setOrderNumber: (orderNum) =>
      set((state) => {
        state.draftRecord.order = orderNum;
      }),
    setDue: (dueDate) =>
      set((state) => {
        state.draftRecord.due = dueDate;
      }),
    setStatus: (status) =>
      set((state) => {
        state.draftRecord.status = status;
      }),
    setChecked: (index) =>
      set((state) => {
        state.draftRecord.setups[index].isChecked =
          !state.draftRecord.setups[index].isChecked;
      }),
    setCheckedAll: () =>
      set((state) => {
        state.draftRecord.setups.forEach(
          (item) => (item.isChecked = !item.isChecked)
        );
      }),
    setSetupNumber: (setupNum, index) =>
      set((state) => {
        if (setupNum !== "film") {
          state.draftRecord.setups[index].setup = Number(setupNum);
        } else {
          state.draftRecord.setups[index].setup = "film";
        }
      }),
    setIsFilm: (index) =>
      set((state) => {
        state.draftRecord.setups[index].isFilm =
          !state.draftRecord.setups[index].isFilm;
        state.draftRecord.setups[index].setup = "film";
      }),
    setArtFile: (artName, index) =>
      set((state) => {
        state.draftRecord.setups[index].artFile = artName;
      }),
    setScreenCount: (count, index) =>
      set((state) => {
        state.draftRecord.setups[index].screens = count;
      }),
    setIsAltTemplate: (index) =>
      set((state) => {
        state.draftRecord.setups[index].isAltTemplate =
          !state.draftRecord.setups[index].isAltTemplate;
      }),
    addSetup: () =>
      set((state) => {
        const newSetup: Setup = { ...initialSetupState };
        newSetup.setup = state.draftRecord.setups.length + 1;
        state.draftRecord.setups.push(newSetup);
      }),
    deleteSetup: (index) =>
      set((state) => {
        state.draftRecord.setups.splice(index, 1);
      }),
    moveSetupForward: (index) =>
      set((state) => {
        arrayMove(state.draftRecord.setups, index, index - 1);
      }),
    moveSetupBack: (index) =>
      set((state) => {
        arrayMove(state.draftRecord.setups, index, index + 1);
      }),
    addNote: () =>
      set((state) => {
        state.draftRecord.notes.push("");
      }),
    deleteNote: (index) =>
      set((state) => {
        state.draftRecord.notes.splice(index, 1);
      }),
    setNote: (note, index) =>
      set((state) => {
        state.draftRecord.notes[index] = note;
      }),
    setIsLocked: () =>
      set((state) => {
        state.draftRecord.isLocked = !state.draftRecord.isLocked;
      }),
  }))
);
