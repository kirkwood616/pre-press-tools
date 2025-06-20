export interface ImagingRecord {
  id?: string;
  order: string;
  due: string;
  status: Status;
  setups: Setup[];
  notes: Note[];
  statusLog: StatusLog[];
}

export type Status = "pending" | "queue" | "imaged" | "washed";

export interface Setup {
  setup: number | string;
  artFile: string;
  screens: number;
  isChecked: boolean;
  isFilm: boolean;
}

export interface Note {
  noteNumber: number;
  noteMessage: string;
}

export interface StatusLog {
  logStatus: Status;
  timestamp: string;
}

export const imagingStatus: Status[] = ["pending", "queue", "imaged", "washed"];
export const sections: Status[] = ["queue", "imaged", "washed"];
