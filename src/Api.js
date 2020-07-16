import axios from "axios";


export const API_URL = 'http://localhost:8000/'
axios.defaults.baseURL = API_URL;

export default class Api {
    static userLogin(email, password) {
        return axios.post('user/login', {email, password})
    }

    static userRegistration(data) {
        return axios.post('user/registration', {data})
    }
}