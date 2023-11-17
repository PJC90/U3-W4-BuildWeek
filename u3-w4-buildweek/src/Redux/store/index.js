import { combineReducers, configureStore } from '@reduxjs/toolkit'
import reducer from '../reducers/reducer'
import loadingReducer from '../reducers/loadingReducer'
import userReducer from '../reducers/userReducer'
import postsReducer from '../reducers/posts'
import searchReducer from '../reducers/searchReducer'

const rootReducer = combineReducers({
  loading: loadingReducer,
  experiences: reducer,
  user: userReducer,
  posts: postsReducer,
  search: searchReducer,
})

const store = configureStore({ reducer: rootReducer })

export default store
