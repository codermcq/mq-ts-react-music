import styled from 'styled-components'

export const PlaylistWrapper = styled.div`
  position: absolute;
  top: -295px;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 100;
  width: 986px;
  height: 301px;

  .playlist-content {
    display: flex;
    background: url(${require('@/assets/img/playlist_bg.png')}) no-repeat;
    background-position: -1014px 0;
    height: 260px;
    background-repeat: repeat-y;
    padding-left: 5px;

    .bline {
      width: 6px;
      height: 260px;
      background-color: #000;
    }
  }
`

export const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  align-content: center;
  top: 1px;
  height: 41px;
  background: url(${require('@/assets/img/playlist_bg.png')}) no-repeat;
  background-position: 0 0;
  padding-left: 5px;
  color: #fff;

  .header-left {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    box-sizing: border-box;
    width: 551px;
    height: 100%;

    .listCount {
      font-size: 14px;
      color: #e2e2e2;
    }

    .icon {
      display: inline-block;
      background: url(${require('@/assets/img/playlist.png')}) no-repeat;
      background-position: -9999px -9999px;
      margin-right: 6px;
      height: 16px;
    }

    .listOperator {
      display: flex;
    }

    .favor {
      display: flex;
      align-items: center;
      color: #ccc;

      &:hover .favor-icon {
        background-position: -24px -20px;
      }

      &:hover .favor-text {
        text-decoration: underline;
      }

      .favor-icon {
        display: inline-block;
        width: 16px;
        background-position: -24px 0;
      }

      .favor-text {
        font-size: 12px;
      }
    }

    .line {
      display: block;
      height: 15px;
      border-left: 1px solid #000;
      border-right: 1px solid #2c2c2c;
      margin: 0 8px;
    }

    .clear {
      display: flex;
      align-items: center;
      color: #ccc;

      &:hover .delete {
        background-position: -51px -20px;
      }

      &:hover .delete-text {
        text-decoration: underline;
      }

      .delete {
        width: 13px;
        background-position: -51px 0;
      }

      .delete-text {
        font-size: 12px;
      }
    }
  }

  .header-right {
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    .close {
      position: absolute;
      right: 20px;
      cursor: pointer;
      color: #333;
    }
  }
`

export const LeftWrapper = styled.div`
  width: 553px;
  color: #fff;

  .list {
    display: flex;
    height: 28px;

    &:hover .list-left .song-name,
    &:hover .list-right .singer-name,
    &:hover .list-right .song-time {
      color: #fff !important;
    }

    &.active .list-left .song-name,
    &.active .list-right .singer-name,
    &.active .list-right .song-time {
      color: #fff !important;
    }

    &:hover, &.active {
      background-color: rgba(0, 0, 0, 0.3);
    }

    .clo {
      display: inline-block;
      background: url(${require('@/assets/img/playlist.png')}) no-repeat 0 9999px;
    }

    .list-left {
      display: flex;
      align-items: center;

      .play-icon {
        width: 10px;
        height: 13px;
        margin-left: 10px;
        background-position: -182px 0;
      }

      .song-name {
        width: 354px;
        color: #ccc;
        padding-left: 10px;
      }
    }

    .list-right {
      height: 100%;
      display: flex;
      align-items: center;

      .singer-name {
        width: 80px;
        height: 28px;
        line-height: 28px;
        color: #9b9b9b;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .song-time {
        width: 45px;
        color: #666;
        margin-left: 10px;
      }

      .source {
        width: 14px;
        height: 16px;
        background-position: -82px 0px;
        margin-left: 15px;
      }
    }
  }
`
export const RightWrapper = styled.div`
  flex: 1;
  position: relative;

  .lyrics-list {
    position: absolute;
    left: 0;
    right: 0;
    width: 354px;
    height: 219px;
    overflow: auto;
    margin: 20px auto;
    color: #989898;

    .lyric-item {
      text-align: center;
      height: 32px;
      line-height: 32px;
      font-size: 12px;
      transition: color 0.7s linear;

      &.active {
        color: #fff;
        font-size: 14px;
      }
    }
  }

`
