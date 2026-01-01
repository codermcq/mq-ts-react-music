import React, { FC, memo, ReactNode, useEffect, useRef } from 'react'
import { HeaderWrapper, LeftWrapper, PlaylistWrapper, RightWrapper } from './style'
import { useAppDispatch, useAppSelector } from '@/store'
import { CloseOutlined } from '@ant-design/icons'
import { formatTime } from '@/utils/format'
import classNames from 'classnames'
import { shallowEqual } from 'react-redux'
import { changeCurrentSongAction, changeLyricsAction, changePlaySongListAction } from '../store'
import { scrollTo } from '@/utils/uni-helper'
import { getSongLyric } from '../service'
import { parseLyric } from '@/utils/parse-lyric'

interface IProps {
  children?: ReactNode
  closeClick: () => void
}

const Playlist: FC<IProps> = (props) => {
  const { playSongList, currentSong, lyrics, lyricIndex } = useAppSelector((state) => ({
    playSongList: state.player.playSongList,
    currentSong: state.player.currentSong,
    lyrics: state.player.lyrics,
    lyricIndex: state.player.lyricIndex
  }), shallowEqual)

  const dispatch = useAppDispatch()
  const lyricListRef = useRef(null)


  // 处理close按钮的点击
  function handleCloseClick() {
    props.closeClick()
  }

  // 处理歌曲列表点击后播放歌曲的操作
  function handleListItemClick(item: any) {
    dispatch(changeCurrentSongAction(item))
    getSongLyric(item.id).then((res: any) => {
      const lyricString = res.lrc.lyric
      const lyric = parseLyric(lyricString)
      dispatch(changeLyricsAction(lyric))
    })
  }

  useEffect(() => {
    if (lyricIndex > 0 && lyricIndex < 3) return
    // (lyricIndex - 3) * 32 -> 是指从第四个开始滚动, 并且计算从第四个开始scrollTop需要滚动多少个32px
    scrollTo(lyricListRef.current, (lyricIndex - 3) * 32, 300)
  }, [lyricIndex])

  // 处理清除按钮在逻辑
  function handleClearClick() {
    dispatch(changePlaySongListAction([]))
  }

  return (
    <PlaylistWrapper>
      <HeaderWrapper className="header">
        <div className="header-left">
          <div className="listCount">播放列表({playSongList.length})</div>
          <div className="listOperator">
            <a className="favor" href="#">
              <span className="icon favor-icon"></span>
              <span className="favor-text">收藏全部</span>
            </a>
            <span className="line"></span>
            <a className="clear" href="#">
              <span className="icon delete"></span>
              <span className="delete-text" onClick={handleClearClick}>清除</span>
            </a>
          </div>
        </div>
        <div className="header-right">
          <div className="songName">{currentSong.name}</div>
          <CloseOutlined className="close" onClick={handleCloseClick} />
        </div>
      </HeaderWrapper>
      <div className="playlist-content">
        <LeftWrapper className="playlist-left">
          {playSongList.map((item) => {
            return (
              <div
                className={classNames('list', { active: item.id === currentSong.id })}
                key={item.id}
                onClick={() => handleListItemClick(item)}
              >
                <div className="list-left">
                  <span
                    className={classNames('play-icon', { clo: item.id === currentSong.id })}
                  ></span>
                  <span className="song-name">{item.name}</span>
                </div>
                <div className="list-right">
                  <span className="singer-name">{item.ar[0].name}</span>
                  <span className="song-time">{formatTime(item.dt)}</span>
                  <span className="source clo"></span>
                </div>
              </div>
            )
          })}
        </LeftWrapper>
        <div className='bline'></div>
        <RightWrapper className="playlist-left">
          <div className='lyrics-list' ref={lyricListRef}>
            {
              lyrics.map((item: any, index: number) => {
                return (
                  <p className={classNames('lyric-item', { 'active': index === lyricIndex })} key={item.time}>{item.text}</p>
                )
              })
            }
          </div>
        </RightWrapper>
      </div>
    </PlaylistWrapper>
  )
}

export default memo(Playlist)
