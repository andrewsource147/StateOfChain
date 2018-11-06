

export function checkMetamaskInstall(){
    return {
        type: "COMMON.CHECK_METAMASK_INSTALL"
      }
}

export function updateMetamaskAccount(address, vote){
    return {
        type: "COMMON.UPDATE_METAMASK_ACCOUNT",
        payload: {address, vote}
      }
}

export function throwMetamaskError(err){
    return {
        type: "COMMON.THROW_METAMASK_ERROR",
        payload: {err}
      }
}