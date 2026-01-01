import React, { FC, memo, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { AppHeaderWrapper, HeaderLeft, HeaderRight } from './style'

import Input from 'antd/es/input/Input'
import { SearchOutlined } from '@ant-design/icons'

import headerTitles from '@/assets/data/header-titles.json'

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = (props) => {
  function showItem(item: any) {
    if (item.type === 'path') {
      return (
        <NavLink to={item.path}>
          {item.title}
          <i className='icon sprite_01'></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.path} target="_blank" className="icon sprite_01">
          {item.title}
        </a>
      )
    }
  }

  return (
    <AppHeaderWrapper>
      <div className="content">
        <HeaderLeft>
          <h1 className="t-logo">
            <a className="logo sprite_01" href="">
              网易云音乐
            </a>
          </h1>
          <div className="title-list">
            {headerTitles.map((item) => {
              return <div className="item" key={item.title}>{showItem(item)}</div>
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <span className='input'>
            <Input placeholder='音乐/视频/电台/用户' prefix={<SearchOutlined />} />
          </span>
          <a className='center' href='https://music.163.com/#/creatorcenter' target='_blank'>创作者中心</a>
          <span className='login'>登录</span>
        </HeaderRight>
      </div>
      <div className='diver'></div>
    </AppHeaderWrapper>
  )
}

export default memo(AppHeader)
