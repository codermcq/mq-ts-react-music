import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import recommendReducer from '../views/discover/c-views/recommend/store'
import playerReducer from '@/views/player/store'
import songsReducer from '@/views/discover/c-views/songs/store'
import playlistReducer from '@/views/menu-playlist/store'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'

// 创建rootReducer
const rootReducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer,
  songs: songsReducer,
  playlist: playlistReducer
})

export type IRootState = ReturnType<typeof rootReducer>

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['player', 'songs'], // 只持久化这些reducer
  blacklist: ['recommend'] // 不持久化播放器状态
}

// 使用persistReducer包装rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

// 创建store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/REGISTER'], // 忽略redux-persist的动作类型
      },
    }),
})

export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch

// 创建并导出persistor
export const persistor = persistStore(store)
export default store
