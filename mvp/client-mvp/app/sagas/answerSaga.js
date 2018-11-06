import { takeLatest, put } from 'redux-saga/effects'
import { answerActionTypes, updateAnswerVote } from "../actions/answerActions";

function* voteAnswerSaga(action) {
  const { answerId, isUpvote } = action.payload

  yield put(updateAnswerVote(answerId, isUpvote));
}

export default function* answerWatcher() {
  yield takeLatest(answerActionTypes.VOTE_ANSWER, voteAnswerSaga)
}
