export const initialState = {
  users: [
    {
      id: 0,
      address: '0x9559034c287a0e73a9a68288bc27eb8189427aa1',
      votes: 10
    },
    {
      id: 1,
      address: '0xd1946aeffc2d053b76fab96117b6f2c7bf395e32',
      votes: 12
    },
    {
      id: 2,
      address: '0xd1946aeffc2d053b76fab96117b6f2c7bf395e31',
      votes: 9
    },
  ]
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

export default userReducer
