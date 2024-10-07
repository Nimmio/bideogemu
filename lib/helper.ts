import { TStatus } from "@/types/game/games";

const STATUS_MAPPING = {
  BACKLOG: "Backlog",
  PLAYING: "Playing",
  DROPPED: "Dropped",
  FINISHED: "Finished",
  HOLD: "Hold",
  CONTINOUS: "Continous",
  UPCOMING: "Upcoming",
  PREORDER: "Preorder",
  NOT_PURCHASED: "Not Purchased",
};

export const mapStatus = (value: TStatus): string => STATUS_MAPPING[value];
