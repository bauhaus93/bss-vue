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

};

const last_event = previous_events["2023-09"];

export { previous_events, last_event };
