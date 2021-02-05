import { take, call, put } from 'redux-saga/effects';
import actionsList from '../../storeConfig/dispatchActionsList';
import env from '../../../env';
        import axios from 'axios';


async function fetchAccessTokenFromFacebook(code: string) {
    const { data } = await axios({
        url: 'https://graph.facebook.com/v4.0/oauth/access_token',
        method: 'get',
        params: {
            client_id: env.facebookId,
            client_secret: env.facebookSecret,
            redirect_uri: 'http://localhost:3000/auth/facebook/callback',
            code,
        },
    });
    console.log(data); // { access_token, token_type, expires_in }
    return data.access_token;
};


async function fetchToBackToSetJWT(accessToken: string) {
    console.log('fetchToBackToSetJWT');
    const options = {
        method: 'POST',
        body: JSON.stringify({ access_token: accessToken }),
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
    };

    let response, user, text;
    try { response = await fetch(`${env.host}/user/facebook`, options) }
    catch (err) { new Error('fetch auth sing up is failed'); }

    if (response) {
        try { text = await response.text(); }
        catch (e) { throw new Error(e) }

        try { user = JSON.parse(text); }
        catch { user = null; }
    }

    if (user) {
        localStorage.setItem('token', user.jwt);
        localStorage.setItem('userPic', user.picture);
        return user;
    } else return null;
}

export default function* watchSingUpFacebook() {
    while (true) {
        try {
            const { code } = yield take(actionsList.SEND_AUTH_CODE_TO_FACEBOOK)
            const access_token = yield call(fetchAccessTokenFromFacebook, code);
            const user = yield call(fetchToBackToSetJWT, access_token);
            yield put({ type: actionsList.SET_AUTH_USER_DATA, user });
        }
        catch (err) {
            console.error(err);
        }
    }
}