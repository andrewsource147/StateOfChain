export const initialState = {
  user: {
    error:"",
    address: "",
    vote:0
  }
}

function commonReducer(state = initialState, action) {
  switch (action.type) {
    case "COMMON.UPDATE_METAMASK_ACCOUNT":
      const {address, vote} = action.payload
      var user = {
        error: "",
        address,
        vote
      }
      return {
        ...state,
        ...{user: user}
      }
    case "COMMON.THROW_METAMASK_ERROR":{
      const {err} = action.payload
      var user = state.user
      user.error = err
      return {
        ...state,
        ...{user: user}
      } 
    }
      default:
      return state
  }
}

export default commonReducer
