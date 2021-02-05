export interface Interface_Hike {
  _id: string;
  name: String;
  start: Date;
  finish: Date;
  subscription: String;
  description: any;
  openEvent: Boolean;
  teamInfo: any;
  eco: Boolean;
  difficulty: String;
  typeHike: String;
  region: String;
  country: String;
  leaderEmail: String;
  authorId: string;
}

export interface TypeAddHike {
  type: string;
  hike: Interface_Hike;
}

export interface TypeHikesList {
  type: string;
  hikes: [Interface_Hike];
}

// export interface ActionTypeAuth extends TypeSetUserData, TypeSendEmail { };
export interface TypeAdded {
  type: string;
  added: boolean;
}

export interface TypeSetHike {
  type: string;
  hike: Interface_Hike;
}

// export interface ActionTypeHike extends TypeAdded, TypeHikesList, TypeSetHike {};
export type ActionTypeHike = TypeAdded & TypeHikesList & TypeSetHike;
