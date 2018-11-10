export const initialState = {
  txs: [],
  users: [
    {
      id: 0,
      address: '0x9559034c287a0e73a9a68288bc27eb8189427aa1',
      votes: "-"
    },
    {
      id: 1,
      address: '0xd1946aeffc2d053b76fab96117b6f2c7bf395e32',
      votes: "-"
    },
    {
      id: 2,
      address: '0xd1946aeffc2d053b76fab96117b6f2c7bf395e31',
      votes: "-"
    },
  ],
  isTxModalActive: false
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "USER.SAVE_TX_HASH":
      const {txHash} = action.payload
      var txs = state.txs
      txs.push(txHash)
      return {
        ...state,
        ...{txs: txs}
      }
    case "USER.SAVE_VOTES":{
      var {votes} = action.payload
      var users = state.users
      for(var i = 0; i< votes.length; i++){
        users[i].votes = votes[i]
      }
      return {
        ...state,
        ...{users: users}
      }
    }
    case "USER.HANDLE_TX_MODAL": {
      return {
        ...state,
        ...{ isTxModalActive: action.payload }
      }
    }
    default:
      return state
  }
}

export default userReducer
