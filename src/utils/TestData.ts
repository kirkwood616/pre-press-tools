import type { ImagingRecord, Status } from "../types/Imaging";

export const sections: Status[] = ["queue", "imaged", "washed"];

export const records: ImagingRecord[] = [
  {
    order: "123456",
    due: "6/13",
    status: "queue",
    setups: [
      {
        setup: 1,
        artFile: "25-MK-0001",
        screens: 3,
        isChecked: false,
        isFilm: false,
      },
      {
        setup: 2,
        artFile: "25-MK-0002",
        screens: 2,
        isChecked: false,
        isFilm: false,
      },
      {
        setup: "FILM",
        artFile: "NAMES",
        screens: 1,
        isChecked: false,
        isFilm: true,
      },
    ],
    notes: [
      { noteNumber: 1, noteMessage: "Post-Expose" },
      { noteNumber: 2, noteMessage: "Gang Setup 1 & 2" },
    ],

    statusLog: [
      {
        logStatus: "pending",
        timestamp: new Date().toLocaleString("en-us", {
          timeZone: "America/Detroit",
        }),
      },
      {
        logStatus: "queue",
        timestamp: new Date().toLocaleString("en-us", {
          timeZone: "America/Detroit",
        }),
      },
    ],
  },
  {
    order: "123457",
    due: "6/13",
    setups: [
      {
        setup: 1,
        artFile: "25-MK-0003",
        screens: 2,
        isChecked: false,
        isFilm: false,
      },
      {
        setup: 2,
        artFile: "25-MK-0004",
        screens: 2,
        isChecked: false,
        isFilm: false,
      },
      {
        setup: "FILM",
        artFile: "NAMES",
        screens: 1,
        isChecked: false,
        isFilm: true,
      },
    ],
    notes: [{ noteNumber: 1, noteMessage: "Gang Setup 1 & 2" }],
    status: "queue",
    statusLog: [
      {
        logStatus: "pending",
        timestamp: new Date().toLocaleString("en-us", {
          timeZone: "America/Detroit",
        }),
      },
      {
        logStatus: "queue",
        timestamp: new Date().toLocaleString("en-us", {
          timeZone: "America/Detroit",
        }),
      },
    ],
  },
  {
    order: "123458",
    due: "6/13",
    setups: [
      {
        setup: 1,
        artFile: "25-MK-0005",
        screens: 5,
        isChecked: false,
        isFilm: false,
      },
      {
        setup: 2,
        artFile: "25-MK-0006",
        screens: 7,
        isChecked: false,
        isFilm: false,
      },
      {
        setup: "FILM",
        artFile: "NAMES",
        screens: 5,
        isChecked: false,
        isFilm: true,
      },
    ],
    notes: [],
    status: "queue",
    statusLog: [
      {
        logStatus: "pending",
        timestamp: new Date().toLocaleString("en-us", {
          timeZone: "America/Detroit",
        }),
      },
      {
        logStatus: "queue",
        timestamp: new Date().toLocaleString("en-us", {
          timeZone: "America/Detroit",
        }),
      },
    ],
  },
];

export const record: ImagingRecord = {
  order: "123456",
  due: "6/13",
  setups: [
    {
      setup: 1,
      artFile: "25-MK-0001",
      screens: 3,
      isChecked: true,
      isFilm: false,
    },
    {
      setup: 2,
      artFile: "25-MK-0002",
      screens: 2,
      isChecked: false,
      isFilm: false,
    },
    {
      setup: "FILM",
      artFile: "NAMES",
      screens: 1,
      isChecked: false,
      isFilm: true,
    },
  ],
  notes: [
    { noteNumber: 1, noteMessage: "Post-Expose" },
    { noteNumber: 2, noteMessage: "Gang Setup 1 & 2" },
  ],
  status: "queue",
  statusLog: [
    {
      logStatus: "pending",
      timestamp: new Date().toLocaleString("en-us", {
        timeZone: "America/Detroit",
      }),
    },
    {
      logStatus: "queue",
      timestamp: new Date().toLocaleString("en-us", {
        timeZone: "America/Detroit",
      }),
    },
  ],
};
