import { answerActionTypes } from '../actions/answerActions'

export const initialState = {
  answers: [],
  isLoading: false
}


export default function answerReducer(state = initialState, action) {
  switch (action.type) {
    case answerActionTypes.SET_ANSWERS:
      return {
        ...state,
        ...{answers: action.payload}
      }
    case answerActionTypes.UPDATE_ANSWER_VOTE:
      const { answerId, isUpvote } = action.payload
      const newState = { ...state }

      newState.answers = newState.answers.map((answer) => {
        if (answer.id === answerId) {
          const votes = isUpvote ? ++answer.votes : --answer.votes

          return {...answer, votes: votes}
        }

        return answer;
      })

      return newState
    case answerActionTypes.SET_LOADING:
      return {
        ...state,
        ...{isLoading: action.payload}
      }
    default:
      return state
  }
}
