import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getBanners,
  getHotRecommend,
  getNewAlbum,
  getPlaylistDetail,
  getSettleSingers
} from '../service/recommend'

const rankingIds = [19723756, 3779629, 2884035]

export const fetchRecommendData = createAsyncThunk('RecommendData', (arg, { dispatch }) => {
  getBanners().then((res) => {
    dispatch(changeBannersAction(res))
  })
  getHotRecommend().then((res) => {
    dispatch(changeHotRecommendAction(res))
  })
  getNewAlbum().then((res) => {
    dispatch(changeNewAlbumAction(res))
  })

  // 1.单独拿到每个榜单的结果
  // for (const id of rankingIds) {
  //   getPlaylistDetail(id).then((res) => {
  //     if (id === 19723756) {
  //       dispatch(changeUpRankingAction(res))
  //     } else if (id === 3779629) {
  //       dispatch(changeNewRankingAction(res))
  //     } else {
  //       dispatch(changeOriginRankingction(res))
  //     }
  //   })
  // }

  // 2.将三个结果都拿到, 统一放到一个数组中管理
  const promises: Promise<any>[] = []
  for (const id of rankingIds) {
    promises.push(getPlaylistDetail(id))
  }

  Promise.all(promises).then((res) => {
    const playlists = res.filter((item) => item.playlist).map((item) => item.playlist)
    dispatch(changeRankingsAction(playlists))
  })

  getSettleSingers().then((res) => {
    dispatch(changeSettleSingerAction(res))
  })
})

interface IRecommendState {
  banners: any[]
  hotRecommend: any[]
  newAlbum: any[]
  // upRanking: {}
  // newRanking: {}
  // originRanking: {}
  rankings: any[]
  settleSinger: any[]
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommend: [],
  newAlbum: [],
  rankings: [],
  settleSinger: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload.banners
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommend = payload.result
    },
    changeNewAlbumAction(state, { payload }) {
      state.newAlbum = payload.albums
    },
    changeRankingsAction(state, { payload }) {
      state.rankings = payload
    },
    changeSettleSingerAction(state, { payload }) {
      state.settleSinger = payload.artists
    }
  }
})

export const {
  changeBannersAction,
  changeHotRecommendAction,
  changeNewAlbumAction,
  changeRankingsAction,
  changeSettleSingerAction
} = recommendSlice.actions
export default recommendSlice.reducer
