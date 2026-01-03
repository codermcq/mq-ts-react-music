import React from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

const Discover = React.lazy(() => import('@/views/discover'))
const Download = React.lazy(() => import('@/views/download'))
const Focus = React.lazy(() => import('@/views/focus'))
const Mine = React.lazy(() => import('@/views/mine'))
const NotFound = React.lazy(() => import('@/views/not-found'))

const Album = React.lazy(() => import('@/views/discover/c-views/album'))
const Artist = React.lazy(() => import('@/views/discover/c-views/artist'))
const Djradio = React.lazy(() => import('@/views/discover/c-views/djradio'))
const Ranking = React.lazy(() => import('@/views/discover/c-views/ranking'))
const Recommend = React.lazy(() => import('@/views/discover/c-views/recommend'))
const Songs = React.lazy(() => import('@/views/discover/c-views/songs'))
const Player = React.lazy(() => import('@/views/player'))
const Playlist = React.lazy(() => import('@/views/menu-playlist'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/album',
        element: <Album />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/djradio',
        element: <Djradio />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/songs',
        element: <Songs />
      }
    ]
  },
  {
    path: '/download',
    element: <Download />
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/player',
    element: <Player />
  },
  {
    path: '/playlist',
    element: <Playlist />
  },
  {
    path: '*',
    element: <NotFound />
  }
]

export default routes
