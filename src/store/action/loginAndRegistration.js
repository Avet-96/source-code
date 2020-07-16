export const USER_LOGIN_REDUCERS = 'USER_LOGIN_REDUCERS'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL'

export function userLoginRequest(email, password) {
    return {
        type: USER_LOGIN_REDUCERS, payload: {email, password}
    }
}

export const USER_REGISTRATION_REDUCERS = 'USER_REGISTRATION_REDUCERS'
export const USER_REGISTRATION_SUCCESS = 'USER_REGISTRATION_SUCCESS'
export const USER_REGISTRATION_FAIL = 'USER_REGISTRATION_FAIL'

export function userRegistrationRequest(data) {
    return {
        type: USER_REGISTRATION_REDUCERS, payload: {data}
    }
}

