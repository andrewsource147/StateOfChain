import { takeLatest, take, put, call, fork, select, takeEvery, all, apply, cancel } from 'redux-saga/effects'
import {newWeb3Instance} from "../services/blockchain/web3"
import * as commonActions from "../actions/commonActions"
import EthereumServices from "../services/blockchain/ethereum"


function* checMetamaskInstall(action){
   var web3Instance = newWeb3Instance()
   if (web3Instance === false){
       yield put(commonActions.throwMetamaskError("Metamask is not installed"))
       return
   }
   //check network is correct
   var networkId = yield call([web3Instance, web3Instance.getNetworkId])
   if (networkId !== 3){
        yield put(commonActions.throwMetamaskError("Network is not in ropsten network"))
        return
   }
   try{
        var address = yield call([web3Instance, web3Instance.getCoinbase])
        var ethereum = new EthereumServices()
        //check vote
        var vote = yield call([ethereum, ethereum.getVoteUser], address)
        console.log({address, vote})
        yield put(commonActions.updateMetamaskAccount(address, vote))
        return
   }catch(err){
       console.log(err)
       yield put(commonActions.throwMetamaskError("Cannot get address, You probably do not login Metamask"))
       return
   }
}

export default function* commonWatcher() {
  yield takeLatest("COMMON.CHECK_METAMASK_INSTALL", checMetamaskInstall)
}
