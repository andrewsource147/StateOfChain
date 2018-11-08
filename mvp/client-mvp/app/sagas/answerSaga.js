import { takeLatest, put, call } from 'redux-saga/effects'
import { answerActionTypes, updateAnswerVote } from "../actions/answerActions";
import answerService from "../services/answerService";

function* voteAnswerSaga(action) {
  const { answerId, address, isUpvote } = action.payload

  yield call(answerService.voteAnswer, answerId, address, isUpvote);

  yield put(updateAnswerVote(answerId, isUpvote));
}

export default function* answerWatcher() {
  yield takeLatest(answerActionTypes.VOTE_ANSWER, voteAnswerSaga)
}
