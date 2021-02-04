import { combineReducers } from "redux";
import {
  useDispatch as _useDispatch,
  useSelector as _useSelector,
  TypedUseSelectorHook,
} from "react-redux";
import modalsReducer from "../modals/reducer";
import authUserReducer from "../auth/reducer";
import { TypeStateAxios } from "../axios/reducer";
import hikeReducer, { InitialStateHike } from "../hikes/reducer";
import axiosReducer from "../axios/reducer";
import { ActionTypeHike } from "../hikes/types";
import {
  InitialStateModals,
  InitialStateUser,
  ActionTypeAuth,
  ShowModalType,
} from "./types";

export type StoreEvent = ActionTypeAuth | ActionTypeHike | ShowModalType;

export function useDispatch() {
  const dispatch = _useDispatch();
  return (event: StoreEvent) => {
    dispatch(event);
  };
}

export interface RootStateType {
  modal: InitialStateModals;
  user: InitialStateUser;
  hike: InitialStateHike;
  axios: TypeStateAxios;
}

// export function useSelector<T>(fn: (store: RootStateType) => T): T {
//   return fn(_useSelector((x) => x));
// }

export const useSelector: TypedUseSelectorHook<RootStateType> = _useSelector;

 

const rootReducer = combineReducers({
  modal: modalsReducer,
  user: authUserReducer,
  hike: hikeReducer,
  axios: axiosReducer,
});

export default rootReducer;
