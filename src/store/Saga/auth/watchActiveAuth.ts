import { take, call, put, select } from "redux-saga/effects";
import axios, { AxiosInstance } from "axios";
import actionsList from "../../storeConfig/dispatchActionsList";
import env from "../../../env";
import { userApi } from "../../../constants";

async function fetchToBackForUser(token: string, axios: AxiosInstance) {
  const data = {
    token: token,
  };
  let response, text, dataRes;

  try {
    response = await axios.post(userApi.GET_USER_BY_TOKEN, data);
    console.log("response", response);
    return response;
  } catch (e) {
    throw new Error(e);
  }
}

export default function* watchActiveAuth() {
  try {
    const token = localStorage.getItem("token");
    const axios = yield select((state) => state.axios.axios);

    if (token) {
      let user;
      try {
        user = yield call(fetchToBackForUser, token as string, axios);
        if (user) {
          yield put({ type: actionsList.SET_AUTH_USER_DATA, user });
          localStorage.setItem("userPic", user.picture);
        } else {
          throw new Error(" initial user is not get");
        }
      } catch {
        user = {};
        yield put({ type: actionsList.SET_AUTH_USER_DATA, user });
        throw new Error(" initial user is not get");
      }
    }
  } catch (err) {
    console.error(err);
  }
}
