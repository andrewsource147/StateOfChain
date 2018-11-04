import { takeLatest, put } from 'redux-saga/effects'
import {questionActionTypes, updateQuestionVote} from "../actions/questionActions";

function* fetchQuestions() {

}

function* voteQuestion(action) {
  const { questionId, isUpvote } = action.payload

  yield put(updateQuestionVote(questionId, isUpvote));
}

export default function* questionWatcher() {
  yield takeLatest(questionActionTypes.FETCH_QUESTIONS, fetchQuestions)
  yield takeLatest(questionActionTypes.VOTE_QUESTION, voteQuestion)
}
