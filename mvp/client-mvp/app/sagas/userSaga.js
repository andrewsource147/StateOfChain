import { takeLatest, take, put, call, fork, select, takeEvery, all, apply, cancel } from 'redux-saga/effects'
import EthereumServices from "../services/ethereum"
import {newWeb3Instance} from "../services/web3"

import {saveTx, saveVotes} from "../actions/userActions"


function* voteUser(action) {
    const { user, isVote } = action.payload
    var ethereum = new EthereumServices()

    try{
        var dataVote = yield call([ethereum, ethereum.getVoteData], user, isVote)
        var web3Instance = newWeb3Instance()
        var userAddr = yield call([web3Instance, web3Instance.getCoinbase])
        var txObject = {
            from: userAddr.toLowerCase(),
            to: ethereum.getStackAddr().toLowerCase(),
            data: dataVote
        }
        //send tx
        var txHash = yield call([web3Instance, web3Instance.sendTx], txObject)
        yield put(saveTx(txHash))
        console.log(txHash)
    }catch(err){
        console.log(err)
    }
    
}

function* updateUserVote(action){
    const {users} = action.payload
    var ethereum = new EthereumServices()
    var listVotes = []
    for (var i = 0; i < users.length; i++){
        var vote = yield call([ethereum, ethereum.getVoteUser], users[i].address)
        listVotes.push(vote)
    }
    yield put(saveVotes(listVotes))
}

export default function* userWatcher() {
  yield takeLatest("USER.VOTE_USER", voteUser)
  yield takeLatest("USER.UPDATE_USER_VOTES", updateUserVote)
}
