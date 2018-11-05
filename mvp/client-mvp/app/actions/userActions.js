export function voteUser(user, isVote) {
    return {
      type: "USER.VOTE_USER",
      payload: {user, isVote}
    }
  }

  export function saveTx(txHash){
    return {
      type: "USER.SAVE_TX_HASH",
      payload: {txHash}
    }
  }

  export function updateUserVotes(users){
    return {
      type: "USER.UPDATE_USER_VOTES",
      payload: {users}
    }
  }
  

  export function saveVotes(votes) {
    return {
      type: "USER.SAVE_VOTES",
      payload: {votes}
    }
  }