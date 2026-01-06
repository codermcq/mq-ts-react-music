import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getCurrentPlaylist } from '../service'

interface IStateProps {
  currentPlaylist: any
}

const initialState: IStateProps = {
  currentPlaylist: {}
}

export const fetchPlaylistData = createAsyncThunk('playlistData', (id: number, { dispatch }) => {
  getCurrentPlaylist(id).then((res: any) => {
    const result = res.playlist
    dispatch(changeCurrentPlaylistAction(result))
  })
})

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    changeCurrentPlaylistAction(state, { payload }) {
      state.currentPlaylist = payload
    }
  }
})

export const { changeCurrentPlaylistAction } = playlistSlice.actions
export default playlistSlice.reducer
