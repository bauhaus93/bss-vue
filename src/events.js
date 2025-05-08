import { get_image_paths } from "./img.js";

const previous_events = {
  "2023-03": {
    date: "19.03.2023",
    images: get_image_paths("2023-03", 0, 5)
  },
  "2023-04": {
    date: "23.04.2023",
    images: get_image_paths("2023-04", 0, 13)
  },
  "2023-05": {
    date: "21.05.2023",
    images: get_image_paths("2023-05", 0, 9)
  },

"2023-06": {
    date: "24.06.2023",
    images: get_image_paths("2023-06", 0, 9)
  },

"2023-07": {
    date: "30.07.2023",
    images: get_image_paths("2023-07", 0, 6)
  },

"2023-08": {
    date: "27.08.2023",
    images: get_image_paths("2023-08", 0, 14)
  },

"2023-09": {
    date: "17.09.2023",
    images: get_image_paths("2023-09", 0, 10)
  },

"2023-10": {
    date: "22.10.2023",
    images: get_image_paths("2023-10", 0, 12)
  },
"2023-11": {
    date: "26.11.2023",
    images: get_image_paths("2023-11", 1, 19)
  },
"2023-12": {
    date: "17.12.2023",
    images: get_image_paths("2023-12", 1, 15)
  },
"2024-01": {
    date: "21.01.2024",
    images: get_image_paths("2024-01", 1, 10)
  },
"2024-03": {
    date: "24.03.2024",
    images: get_image_paths("2024-03", 0, 12)
  },
"2024-04": {
    date: "21.04.2024",
    images: get_image_paths("2024-04", 1, 12)
  },
"2024-10": {
    date: "06.10.2024",
    images: get_image_paths("2024-10", 1, 17)
  },
"2024-11": {
    date: "24.11.2024",
    images: get_image_paths("2024-11", 1, 22)
  },

"2025-04": {
    date: "27.04.2025",
    images: get_image_paths("2025-04", 1, 1)
  },




};

const last_event = previous_events["2025-04"];

export { previous_events, last_event };
