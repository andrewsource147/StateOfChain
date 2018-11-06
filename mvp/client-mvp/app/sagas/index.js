import { fork, all } from 'redux-saga/effects'
import questionWatcher from './questionSaga'
import answerWatcher from './answerSaga'
import userWatcher from './userSaga'
import commonWatcher from './commonSaga'

export default function* rootSaga() {
  yield all([
    fork(questionWatcher),
    fork(answerWatcher),
    fork(userWatcher),
    fork(commonWatcher)
  ])
}
