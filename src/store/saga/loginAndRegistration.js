import {takeLatest, call, put} from 'redux-saga/effects';
import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REDUCERS,
    USER_LOGIN_SUCCESS, USER_REGISTRATION_FAIL,
    USER_REGISTRATION_REDUCERS, USER_REGISTRATION_SUCCESS
} from "../action/loginAndRegistration";
import Api from "../../Api";

export default function watcher() {
    takeLatest(USER_LOGIN_REDUCERS, userLoginFunction)
    takeLatest(USER_REGISTRATION_REDUCERS, userRegistrationFunction)
}

export function* userLoginFunction(action) {
    try {
        const {email, password} = action.payload
        const {data} = yield call(Api.userLogin, email, password);
        yield put({
            type: USER_LOGIN_SUCCESS,
            payload: {data}
        })
    } catch (e) {
        yield put({
            type: USER_LOGIN_FAIL,
            message: e.message
        })
    }
}

export function* userRegistrationFunction(action) {
    try {

        const {data} = yield call(Api.userRegistration, action.payload);
        yield put({
            type: USER_REGISTRATION_SUCCESS,
            payload: {data}
        })
    } catch (e) {
        yield put({
            type: USER_REGISTRATION_FAIL,
            message: e.message
        })
    }
}