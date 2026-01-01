import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPlayList, getPlaylistCatlist } from '../service'
import { IRootState } from '@/store';

interface IParams {
  page?: number,
  size?: number
}

export const fetchSongsData = createAsyncThunk(
  'fetchSongs',
  (params: { page: number; size: number }, { dispatch }) => {
    getPlayList(params.page, params.size).then((res: any) => {
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
}

const initialState: ISongsState = {
  songsList: [],
  categories: {},
  sub: []
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
    }
  }
})

export const { changeSongsList, changeCategories, changeSub } = songsSclice.actions
export default songsSclice.reducer
