export const ActionTypes = {
  TEST: 'TEST',
  RESET_TEST: 'RESET_TEST',
}

export const setTest = (test) => ({
  type: ActionTypes.SET_TEST,
  payload: test,
})

export const resetTest = () => ({
  type: ActionTypes.RESET_TEST,
})
