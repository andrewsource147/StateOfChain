import { answerActionTypes } from '../actions/answerActions'

export const initialState = {
  answers: [
    {
      id: 1,
      content: 'An answer for a question',
      user: '0x9559034c287a0e73a9a68288bc27eb8189427aa1',
      votes: 1
    },
    {
      id: 2,
      content: 'An answer for a question 2',
      user: '0x9559034c287a0e73a9a68288bc27eb81835j7aa1',
      votes: 3
    },
  ],
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
