import React, { FC, memo, ReactNode, useEffect, useRef, useState, RefObject, useCallback } from 'react'
import { BarControlWrapper, BarOperatorWrapper, BarPlayWrapper, PlayerBarWrapper } from './style'
import { NavLink } from 'react-router-dom'
import { Slider, message, Alert } from 'antd'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { formatTime, getImageSize } from '@/utils/format'
import { getSongById } from '@/utils/handle-player'
import { changeLyricIndexAction, changeMusicAction, changePlayModeAction } from '../store'
import Playlist from '../playlist'

interface IProps {
  children?: ReactNode
}

const AppPlayerBar: FC<IProps> = (props) => {
  const { currentSong, lyrics, lyricIndex, playMode, playSongList } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      lyrics: state.player.lyrics,
      lyricIndex: state.player.lyricIndex,
      playMode: state.player.playMode,
      playSongList: state.player.playSongList
    }),
    shallowEqual
  )

  const dispatch = useAppDispatch()

  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isSlider, setIsSlider] = useState(false)
  const [isExpand, setIsExpand] = useState(false)
  const playlistRef = useRef<HTMLDivElement>(null)

  const audioRef = useRef<HTMLAudioElement>(null)
  const listCount = playSongList.length

  useEffect(() => {
    // 组件加载时获取播放的歌曲
    if (audioRef.current) {
      audioRef.current.src = getSongById(currentSong?.id)
      audioRef.current
        ?.play()
        .then((res) => {
          setIsPlaying(true)
        })
        .catch((err) => {
          setIsPlaying(false)
        })
    }

    // 获取音乐的总时长
    setDuration(currentSong?.dt)
  }, [currentSong, playSongList])

  // play按钮被点击时
  function handlePlayClick() {
    if (isPlaying) {
      audioRef?.current?.pause()
    } else {
      audioRef.current?.play().catch((err) => {
        console.log('点击后播放错误', err)
        setIsPlaying(false)
      })
    }
    setIsPlaying(!isPlaying)
  }

  // aduio的播放时间发生改变时
  function handleTimeUpdate() {
    const currentTime = audioRef.current!.currentTime * 1000

    // 2.计算当前歌曲进度
    if (!isSlider) {
      const progress = (currentTime / duration) * 100
      setProgress(progress)
      setCurrentTime(currentTime)
    }

    // 3.根据当前的时间匹配对应的歌词
    let index = lyrics.length - 1
    for (let i = 0; i < lyrics.length; i++) {
      const lyric = lyrics[i]
      if (lyric.time > currentTime) {
        index = i - 1
        break
      }
    }

    // 保存匹配的索引, 如果记录的索引等于匹配的索引, 直接返回
    if (lyricIndex === index || index === -1) return
    dispatch(changeLyricIndexAction(index))
    // message.open({
    //   content: lyrics[index].text,
    //   key: 'lyric',
    //   duration: 0
    // })
  }

  // 歌曲播放完自动播放下一首
  function handleTimeEnded() {
    if (playMode === 2) {
      audioRef.current!.currentTime = 0
      audioRef.current?.play()
    } else {
      handleChangeMusic(true)
    }
  }

  // 点击滚动条后的处理事件
  function handleSliderChanged(value: number) {
    // 获取点击位置的时间
    const currentTime = (value / 100) * duration

    // 设置点击后audio的当前播放的时间
    audioRef.current!.currentTime = currentTime / 1000

    // 设置当前时间
    setCurrentTime(currentTime)
    setProgress(value)
    setIsSlider(false)
  }

  function handleSliderChaning(value: number) {
    // 是否处于拖拽状态
    setIsSlider(true)

    // 设置进度
    setProgress(value)

    // 获取Value对应的时间, 保证拖拽的时候时间也能改变
    const currentTime = (value / 100) * duration
    setCurrentTime(currentTime)
  }

  // 切换播放模式
  function handleChangePlayMode() {
    let newPlayMode = playMode + 1
    if (newPlayMode > 2) {
      newPlayMode = 0
    }
    dispatch(changePlayModeAction(newPlayMode))
  }

  // 点击下一首或者上一首
  function handleChangeMusic(isNext = true) {
    dispatch(changeMusicAction(isNext))
  }

  // 处理播放列表的点击
  function handlePlaylistClick() {
    setIsExpand(!isExpand)
  }

  function handleCloseCick() {
    setIsExpand(false)
  }

  // 点击外部关闭播放列表
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (playlistRef.current && !playlistRef.current.contains(event.target as Node)) {
      setIsExpand(false)
    }
  }, [])

  useEffect(() => {
    if (isExpand) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isExpand, handleClickOutside])

  return (
    <PlayerBarWrapper>
      <div className="content">
        <BarControlWrapper isPlaying={isPlaying}>
          <a className="btn prev" onClick={() => handleChangeMusic(false)}></a>
          <a className="btn play" onClick={handlePlayClick}></a>
          <a className="btn next" onClick={() => handleChangeMusic()}></a>
        </BarControlWrapper>
        <BarPlayWrapper>
          <NavLink to="/player">
            <img className="image" src={getImageSize(currentSong?.al?.picUrl, 34, 35)} alt="" />
          </NavLink>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong?.name}</span>
              <span className="singer-name">{currentSong?.ar?.[0]?.name}</span>
            </div>
            <div className="progress">
              <Slider
                onChange={handleSliderChaning}
                onChangeComplete={handleSliderChanged}
                step={0.5}
                value={progress}
                tooltip={{ formatter: null }}
              />
              <div className="time">
                <div className="current">{formatTime(currentTime)}</div>
                <div className="divider">/</div>
                <div className="duration">{formatTime(duration)}</div>
                <div></div>
              </div>
            </div>
          </div>
        </BarPlayWrapper>
        <BarOperatorWrapper playMode={playMode}>
          <div className="left">
            <a className="btn pip" href="#"></a>
            <a className="btn favor" href="#"></a>
            <a className="btn share" href="#"></a>
          </div>
          <div className="right">
            <a className="btn volume" href="#"></a>
            <a className="btn loop" href="#" onClick={handleChangePlayMode}></a>
            <span className="btn playlist" onClick={handlePlaylistClick}>{listCount}</span>
          </div>
        </BarOperatorWrapper>
      </div>
      { isExpand && (
        <div ref={playlistRef}>
          <Playlist closeClick={() => handleCloseCick()} />
        </div>
      )}
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onEnded={handleTimeEnded} />
    </PlayerBarWrapper>
  )
}

export default memo(AppPlayerBar)
