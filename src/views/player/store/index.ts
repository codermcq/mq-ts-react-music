import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getSongDetail, getSongLyric } from '../service'
import { parseLyric } from '@/utils/parse-lyric'
import { IRootState } from '@/store'

export const fetchCurrentSongAction = createAsyncThunk<void, number, { state: IRootState }>(
  'currentSong',
  (id: number, { dispatch, getState }) => {
    // 准备播放某一首歌曲时, 分成两种情况
    // 1.从列表尝试是否可以获取到这首歌
    const playSongList = getState()?.player?.playSongList
    const findIndex = playSongList.findIndex((item) => item.id === id)

    if (findIndex === -1) {
      // 没有在列表中找到相同的id
      // 1.获取歌曲信息
      getSongDetail(id).then((res: any) => {
        if (!res.songs.length) return
        const song = res.songs[0]

        // 对原来的songList进行浅拷贝
        const newPlaySongList = [...getState().player.playSongList]
        // 将新的song添加进行列表中
        newPlaySongList.push(res?.songs?.[0])

        dispatch(changeCurrentSongAction(song))
        dispatch(changePlaySongListAction(newPlaySongList))
        dispatch(changePlaySongIndexAction(newPlaySongList.length - 1))
      })
    } else {
      // 找到了相同id
      const song = playSongList[findIndex]
      dispatch(changeCurrentSongAction(song))
      dispatch(changePlaySongIndexAction(findIndex))
    }

    getSongLyric(id).then((res: any) => {
      const lyricString = res.lrc.lyric
      // 对歌词进行格式化
      const lyric = parseLyric(lyricString)
      dispatch(changeLyricsAction(lyric))
    })
  }
)

export const changeMusicAction = createAsyncThunk<void, boolean, { state: IRootState }>(
  'changeMusic',
  (isNext, { dispatch, getState }) => {
    // 1.获取state数据
    const playMode = getState().player.playMode
    const songIndex = getState().player.playSongIndex
    const songList = getState().player.playSongList

    // 2.根据不同的mode来切换不同的索引
    let newIndex = songIndex
    if (playMode === 1) {
      // 随机播放
      newIndex = Math.floor(Math.random() * songList.length)
    } else {
      newIndex = isNext ? songIndex + 1 : songIndex - 1
      if (newIndex > songList.length - 1) newIndex = 0
      if (newIndex < 0) newIndex = songList.length - 1
    }

    // 3.获取当前的歌曲
    const song = songList[newIndex]
    dispatch(changeCurrentSongAction(song))
    dispatch(changePlaySongIndexAction(newIndex))

    // 4.请求新的歌词
    getSongLyric(song.id).then((res: any) => {
      const lyricString = res.lrc.lyric
      // 对歌词进行格式化
      const lyric = parseLyric(lyricString)
      dispatch(changeLyricsAction(lyric))
    })
  }
)
interface IPlayerState {
  currentSong: any
  lyrics: any
  lyricIndex: number
  playSongList: any[]
  playSongIndex: number
  playMode: number
}

const initialState: IPlayerState = {
  currentSong: {},
  lyrics: [],
  lyricIndex: -1,
  playSongList: [],
  playSongIndex: -1,
  playMode: 0 // 0: 顺序播放, 1: 随机, 2: 单曲循环
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
    changeLyricsAction(state, { payload }) {
      state.lyrics = payload
    },
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload
    },
    changePlaySongListAction(state, { payload }) {
      state.playSongList = payload
    },
    changePlaySongIndexAction(state, { payload }) {
      state.playSongIndex = payload
    },
    changePlayModeAction(state, { payload }) {
      state.playMode = payload
    }
  }
})

export const {
  changeCurrentSongAction,
  changeLyricsAction,
  changeLyricIndexAction,
  changePlaySongListAction,
  changePlaySongIndexAction,
  changePlayModeAction
} = playerSlice.actions
export default playerSlice.reducer
