import {
    OPEN_MODAL,
    USER_LOGIN_SUCCESS,
    USER_REGISTRATION_SUCCESS
} from "../action/loginAndRegistration";

const initialState = {
    loginData: [],
    registrationData: [],
    bool: false
}
export default function reducers(state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN_SUCCESS: {
            return {loginData: [...action.payload]}
        }
        case USER_REGISTRATION_SUCCESS: {
            return {registrationData: [...action.payload]}
        }
        case OPEN_MODAL: {
            return {bool: action.payload}
        }
        default :
            return {...state}
    }
}