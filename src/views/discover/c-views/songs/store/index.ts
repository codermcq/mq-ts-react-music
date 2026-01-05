import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPlayList, getPlaylistCatlist } from '../service'
import { IRootState } from '@/store'

interface IParams {
  page?: number
  size?: number
}

export const fetchSongsData = createAsyncThunk(
  'fetchSongs',
  (params: { page: number; size: number; cat: string }, { dispatch }) => {
    getPlayList(params.page * 35, params.size, params.cat).then((res: any) => {
      const result = res.playlists
      dispatch(changeSongsList(result))
    })
    getPlaylistCatlist().then((res: any) => {
      dispatch(changeCategories(res.categories))
      dispatch(changeSub(res.sub))
    })
  }
)

interface ISongsState {
  songsList: any[]
  categories: {}
  sub: any[]
  currentPage: number
  currentPageSize: number
}

const initialState: ISongsState = {
  songsList: [],
  categories: {},
  sub: [],
  currentPage: 0,
  currentPageSize: 0
}

const songsSclice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    changeSongsList(state, { payload }) {
      state.songsList = payload
    },
    changeCategories(state, { payload }) {
      state.categories = payload
    },
    changeSub(state, { payload }) {
      state.sub = payload
    },
    changeCurrenPage(state, { payload }) {
      state.currentPage = payload
    },
    changeCurrenPageSize(state, { payload }) {
      state.currentPageSize = payload
    }
  }
})

export const {
  changeSongsList,
  changeCategories,
  changeSub,
  changeCurrenPage,
  changeCurrenPageSize
} = songsSclice.actions
export default songsSclice.reducer
