import { ActionTypes } from '../actions/index'

const initialState = {
  test: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_TEST:
      return { ...state, test: action.payload }
    case ActionTypes.RESET_TEST:
      return { ...state, test: null }
    default:
      return state
  }
}

export default reducer
