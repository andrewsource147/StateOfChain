import { fork, all } from 'redux-saga/effects'
import questionWatcher from './questionSaga'
import answerWatcher from './answerSaga'

export default function* rootSaga() {
  yield all([
    fork(questionWatcher),
    fork(answerWatcher)
  ])
}
