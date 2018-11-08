export const questionActionTypes = {
  FETCH_QUESTIONS: 'FETCH_QUESTIONS',
  FETCH_QUESTION: 'FETCH_QUESTION',
  SET_QUESTIONS: 'SET_QUESTIONS',
  SET_QUESTION: 'SET_QUESTION',
  SUBMIT_QUESTION: 'SUBMIT_QUESTION',
  VOTE_QUESTION: 'VOTE_QUESTION',
  UPDATE_QUESTION_VOTE: 'UPDATE_QUESTION_VOTE',
  SET_LOADING: 'SET_LOADING'
}

export function submitQuestion(title, content, address) {
  return {
    type: questionActionTypes.SET_QUESTION,
    payload: { title, content, address }
  }
}

export function setQuestions(questions) {
  return {
    type: questionActionTypes.SET_QUESTIONS,
    payload: questions
  }
}

export function setQuestion(question) {
  return {
    type: questionActionTypes.SET_QUESTION,
    payload: question
  }
}

export function updateQuestionVote(questionId, isUpvote) {
  return {
    type: questionActionTypes.UPDATE_QUESTION_VOTE,
    payload: { questionId, isUpvote }
  }
}

export function voteQuestion(questionId, address, isUpvote) {
  return {
    type: questionActionTypes.VOTE_QUESTION,
    payload: { questionId, address, isUpvote }
  }
}

export function setLoading(isLoading) {
  return {
    type: questionActionTypes.SET_LOADING,
    payload: isLoading
  }
}
