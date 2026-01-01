import React, { FC, memo, ReactNode } from 'react'
import { AppFooterWrapper } from './style'
import { footerData, footerLinks } from '../../assets/data/local-data'
import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const AppFooter: FC<IProps> = (props) => {
  return (
    <AppFooterWrapper>
      <div className="inner">
        <div className="enter">
          {footerData.map((item) => {
            return (
              <div className="item" key={item.title}>
                <Link to={item.path} className="link"></Link>
                <span className="text">{item.title}</span>
              </div>
            )
          })}
        </div>
        <div className="copy">
          <p className="link">
            {footerLinks.map((item) => {
              return (
                <span key={item.title}>
                  <a className='item' href={item.link}>{item.title}</a>
                  <span className='divier'>|</span>
                </span>
              )
            })}
          </p>
          <p className="sep">
            <span className='undeline sep'>廉正举报</span>
            <span className='span'>不良信息举报邮箱: 51jubao@service.netease.com</span>
          </p>
          <p className="link">
            <span className='span'>互联网宗教信息服务许可证：浙（2022）0000120</span>
            <span className='span'>增值电信业务经营许可证：浙B2-20150198</span>
            <a className='undeline' href="https://beian.miit.gov.cn/#/Integrated/index"></a>
          </p>
          <p className="link">
            <span className='span sep'>网易公司版权所有©1997-2025</span>
            <span className='span'>杭州乐读科技有限公司运营：</span>
            <a className='undeline' href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564">浙网文[2024] 0900-042号</a>
            <a className='undeline' href="https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/34942157981/2e30/30c1/ad1f/7be053a28e91dd8bafe49bdf6455cb2a.png">浙公网安备 33010802013307号</a>
            <span className='undeline'>浙公网安备 33010802013307号</span>
          </p>
        </div>
      </div>
    </AppFooterWrapper>
  )
}

export default memo(AppFooter)
