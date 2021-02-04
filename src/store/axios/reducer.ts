import axios, { AxiosInstance } from "axios";
import actions from "../storeConfig/dispatchActionsList";
import env from "../../env";
import { useDispatch } from "react-redux";

// TODO: types for axios
export interface TypeStateAxios {
  axios: AxiosInstance;
}

enum ActionTypes {
  SET_TOKEN = "SET_TOKEN",
}

interface T_SET_TOKEN {
  type: ActionTypes.SET_TOKEN;
  token: string;
}

const generateAxiosInstance = (token: string) => {
  const dispatch = useDispatch();

  const instance = axios.create({
    baseURL: env.host,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });

  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      const { status } = error.response;
      console.warn("[store][axios][reducer][generateAxiosInstance ()] ");

      if (status === 401 || status === 403) {
        // dispatch(logout());
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

const initialState = {
  axios: axios.create({
    baseURL: env.host,
    headers: {},
  }),
};

const axiosReducer = (state = initialState, action: T_SET_TOKEN) => {
  switch (action.type) {
    case actions.SET_TOKEN:
      return {
        ...state,
        axios: generateAxiosInstance(action.token),
      };

    default:
      return state;
  }
};

export default axiosReducer;

//   "Access-Control-Allow-Origin": "*",
