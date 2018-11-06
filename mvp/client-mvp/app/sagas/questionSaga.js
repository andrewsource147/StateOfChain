import { takeLatest, put, call } from 'redux-saga/effects'
import {
  questionActionTypes,
  updateQuestionVote,
  setQuestions,
  setQuestion,
} from "../actions/questionActions";
import { setAnswers } from "../actions/answerActions";
import questionService  from '../services/questionService';

function* fetchQuestionsSaga() {
  const response = yield call(questionService.fetchQuestions);

  yield put(setQuestions(response.data));
}

function* fetchQuestionSaga(action) {
  const response = yield call(questionService.fetchQuestion, action.payload);

  yield put(setQuestion(response.data.question));
  yield put(setAnswers(response.data.answer));
}

function* submitQuestionSaga(action) {
  const { title, content, address } = action.payload;

  const response = yield call(questionService.submitQuestion, title, content, address);

  if (response.status === 'success') {
    const questionResponse = yield call(questionService.fetchQuestions);

    yield put(setQuestions(questionResponse.data));
  }
}

function* voteQuestionSaga(action) {
  const { questionId, isUpvote } = action.payload

  yield put(updateQuestionVote(questionId, isUpvote));
}

export default function* questionWatcher() {
  yield takeLatest(questionActionTypes.FETCH_QUESTIONS, fetchQuestionsSaga)
  yield takeLatest(questionActionTypes.FETCH_QUESTION, fetchQuestionSaga)
  yield takeLatest(questionActionTypes.VOTE_QUESTION, voteQuestionSaga)
  yield takeLatest(questionActionTypes.SUBMIT_QUESTION, submitQuestionSaga)
}
