import {questionActionTypes} from '../actions/questionActions'

export const initialState = {
  questions: [
    {
      id: 0,
      title: 'Just a question',
      content: 'I dont know how next.js work',
      href: '',
      created: '2018-01-19 03:14:07',
      user: '0x9559034c287a0e73a9a68288bc27eb8189427aa1',
      votes: 10,
      answers: 9
    },
    {
      id: 1,
      title: 'What is Next.js',
      content: 'I dont know how next.js work',
      href: '',
      created: '2018-01-20 02:07:18',
      user: '0xd1946aeffc2d053b76fab96117b6f2c7bf395e32',
      votes: 2,
      answers: 1
    }
  ],
  isLoading: false
}

export default function questionReducer(state = initialState, action) {
  switch (action.type) {
    case questionActionTypes.SET_QUESTIONS:
      return {
        ...state,
        ...{questions: action.payload}
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
