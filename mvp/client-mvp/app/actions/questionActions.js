export const questionActionTypes = {
  FETCH_QUESTIONS: 'FETCH_QUESTIONS',
  SET_QUESTIONS: 'SET_QUESTIONS',
  VOTE_QUESTION: 'VOTE_QUESTION',
  UPDATE_QUESTION_VOTE: 'UPDATE_QUESTION_VOTE',
  SET_LOADING: 'SET_LOADING'
}

export function setQuestions(questions) {
  return {
    type: questionActionTypes.SET_QUESTIONS,
    payload: questions
  }
}

export function updateQuestionVote(questionId, isUpvote) {
  return {
    type: questionActionTypes.UPDATE_QUESTION_VOTE,
    payload: { questionId, isUpvote }
  }
}

export function voteQuestion(questionId, isUpvote) {
  return {
    type: questionActionTypes.VOTE_QUESTION,
    payload: { questionId, isUpvote }
  }
}

export function setLoading(isLoading) {
  return {
    type: questionActionTypes.SET_LOADING,
    payload: isLoading
  }
}
