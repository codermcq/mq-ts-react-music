import React, { memo, Suspense, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import AppPlayerBar from './views/player/app-player-bar'
import { useAppDispatch, useAppSelector } from './store'
import { fetchCurrentSongAction } from './views/player/store'
import { shallowEqual } from 'react-redux'
import songs from './views/discover/c-views/songs'

const App = memo(() => {
  const {playSongIndex, playSongList} = useAppSelector((state) => ({
    playSongIndex: state.player.playSongIndex,
    playSongList: state.player.playSongList
  }), shallowEqual)

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCurrentSongAction(playSongList[playSongIndex].id || playSongList[0].id))
  }, [dispatch])

  return (
    <div>
      <AppHeader />
      <Suspense fallback="loading........">{useRoutes(routes)}</Suspense>
      <AppFooter />

      {/* 播放器工具栏 */}
      <AppPlayerBar />
    </div>
  )
})

export default App
