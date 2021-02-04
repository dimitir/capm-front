import { call, take, put, select, delay } from "redux-saga/effects";
import actionsList from "../../storeConfig/dispatchActionsList";
import { hikesApi, pageRouts } from "../../../constants";
import { AxiosInstance } from "axios";
// import { push } from "connected-react-router";
async function fetchAddHike(hike: any, axios: AxiosInstance) {
  console.log("fetch");
  const { data } = await axios.post(hikesApi.ADD_HIKE, { hike });
  return data;
}

export default function* watchAddHike() {
  while (true) {
    try {
      const axios = yield select((state) => state.axios.axios);
      const { hike } = yield take(actionsList.ADD_HIKE);
      const data = yield call(fetchAddHike, hike, axios);
      if (data == "OK") {
        yield put({ type: actionsList.HIKE_ADDED, added: true });
      }
    } catch {
      new Error("watchAddHike");
    }
  }
}
