import { combineReducers, configureStore } from '@reduxjs/toolkit'
import reducer from '../reducers/reducer'
import userReducer from '../reducers/userReducer'

const bigReducer = combineReducers({
  user: userReducer,
  experiences: reducer,
})

const store = configureStore({ reducer: bigReducer })
// const store = configureStore({ reducer: userReducer })

export default store
