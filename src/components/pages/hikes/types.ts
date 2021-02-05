export type Type_Difficulty = "ERROR" | "WARN" | "INFO" | "DEBUG";
export type Type_HikeType = "ERROR" | "WARN" | "INFO" | "DEBUG";

export interface Interface_Hike {
  name: string;
  start: Date;
  finish: Date;
  subscription: string;
  description: string | null;
  openEvent: boolean;
  eco: boolean;
  difficulty: Type_Difficulty;
  typeHike: Type_HikeType;
  country: string | null;
  region: string | null;
  teamInfo: string | null;
  leaderEmail: string;
  authorId: string;
  _id?: string;
}
