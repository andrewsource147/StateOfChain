export const answerActionTypes = {
  FETCH_ANSWERS: 'FETCH_ANSWERS',
  SET_ANSWERS: 'SET_ANSWERS',
  VOTE_ANSWER: 'VOTE_ANSWER',
  UPDATE_ANSWER_VOTE: 'UPDATE_ANSWER_VOTE',
  SET_LOADING: 'SET_LOADING'
}

export function setAnswers(answers) {
  return {
    type: answerActionTypes.SET_ANSWERS,
    payload: answers
  }
}

export function updateAnswerVote(answerId, isUpvote) {
  return {
    type: answerActionTypes.UPDATE_ANSWER_VOTE,
    payload: { answerId, isUpvote }
  }
}

export function voteAnswer(answerId, address, isUpvote) {
  return {
    type: answerActionTypes.VOTE_ANSWER,
    payload: { answerId, address, isUpvote }
  }
}

export function setLoading(isLoading) {
  return {
    type: answerActionTypes.SET_LOADING,
    payload: isLoading
  }
}
