import { GAME_STATUS } from "@prisma/client";

export interface ICreateGame {
  name: string;
  platform: string;
  status: GAME_STATUS;
  releaseDate?: Date;
  finishDate?: Date;
}

export interface IGame {
  id: number;
  updatedAt: Date;
  name: string;
  platform: string;
  STATUS: TStatus;
  releaseDate: Date;
}

export type TStatus =
  | "BACKLOG"
  | "PLAYING"
  | "DROPPED"
  | "FINISHED"
  | "HOLD"
  | "CONTINOUS"
  | "UPCOMING"
  | "PREORDER"
  | "NOT_PURCHASED";
