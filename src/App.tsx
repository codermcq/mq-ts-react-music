import React, { memo, Suspense, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import AppPlayerBar from './views/player/app-player-bar'
import { useAppDispatch } from './store'
import { fetchCurrentSongAction } from './views/player/store'

const App = memo(() => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCurrentSongAction(3326372789))
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
