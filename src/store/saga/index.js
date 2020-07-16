import {fork, all} from 'redux-saga/effects'
import loginAndRegistration from './loginAndRegistration.js'

export default function* watchers() {
    yield all([
        loginAndRegistration
    ].map(v => fork(v)))
}