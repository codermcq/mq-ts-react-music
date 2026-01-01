import React, { FC, memo, ReactNode } from 'react'
import { UserLoginWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const UserLogin: FC<IProps> = (props) => {
  return (
    <UserLoginWrapper>
      <div className="vip">
        <img src={require('@/assets/img/dis_vip_card.png')} alt="" />
      </div>
      <div className="user">
        <div className="cover">
          <p className="text">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
          <a className="login" href="#">
            用户登录
          </a>
        </div>
      </div>
    </UserLoginWrapper>
  )
}

export default memo(UserLogin)
