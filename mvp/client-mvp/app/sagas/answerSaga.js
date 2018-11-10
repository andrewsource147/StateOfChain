import { takeLatest, put, call } from 'redux-saga/effects'
import {answerActionTypes, setAnswers, updateAnswerVote} from "../actions/answerActions";
import answerService from "../services/answerService";
import questionService from "../services/questionService";

function* voteAnswerSaga(action) {
  const { answerId, address, isUpvote } = action.payload

  yield call(answerService.voteAnswer, answerId, address, isUpvote);

  yield put(updateAnswerVote(answerId, isUpvote));
}

function* submitAnswerSaga(action) {
  const { questionId, content, address } = action.payload;

  const response = yield call(answerService.submitAnswer, questionId, content, address);

  if (response.status === 'success') {
    const questionResponse = yield call(questionService.fetchQuestion, questionId);

    yield put(setAnswers(questionResponse.data.answer));
  }
}

export default function* answerWatcher() {
  yield takeLatest(answerActionTypes.VOTE_ANSWER, voteAnswerSaga)
  yield takeLatest(answerActionTypes.SUBMIT_ANSWER, submitAnswerSaga)
}
