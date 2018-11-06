import {questionActionTypes} from '../actions/questionActions'

export const initialState = {
  questions: [],
  selectedQuestion: null,
  isLoading: false
}

export default function questionReducer(state = initialState, action) {
  switch (action.type) {
    case questionActionTypes.SET_QUESTIONS:
      return {
        ...state,
        ...{questions: action.payload}
      }
    case questionActionTypes.SET_QUESTION:
      return {
        ...state,
        ...{ selectedQuestion: action.payload }
      }
    case questionActionTypes.UPDATE_QUESTION_VOTE:
      const {questionId, isUpvote} = action.payload
      const newState = { ...state }

      newState.questions = newState.questions.map((question) => {
        if (question.id === questionId) {
          const votes = isUpvote ? ++question.votes : --question.votes

          return {...question, votes: votes}
        }

        return question;
      })

      return newState
    case questionActionTypes.SET_LOADING:
      return {
        ...state,
        ...{isLoading: action.payload}
      }
    default:
      return state
  }
}
