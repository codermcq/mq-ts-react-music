import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import recommendReducer from '../views/discover/c-views/recommend/store'
import playerReducer from '@/views/player/store'
import songsReducer from '@/views/discover/c-views/songs/store'

const store = configureStore({
  reducer: {
    recommend: recommendReducer,
    player: playerReducer,
    songs: songsReducer
  }
})

type GetStateFnType = typeof store.getState
export type IRootState = ReturnType<GetStateFnType>
type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch

export default store
