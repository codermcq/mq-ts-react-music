import React, { FC, memo, ReactNode } from 'react'
import { HeaderV1Wrapper } from './style'
import { Link, useNavigate } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  title?: string
  keywords?: string[]
  moreText?: string
  moreLink?: string
}

const SectionHeaderV1: FC<IProps> = (props) => {
  const { title = '默认标题', keywords = [], moreText = '更多', moreLink = '' } = props

  const navigate = useNavigate()

  function handleKeywordClick(item: any) {
    navigate(`/discover/songs?cat=${item}`)
    window.scrollTo(0, 0)
  }

  return (
    <HeaderV1Wrapper>
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keywords">
          {keywords.map((item) => {
            return (
              <div className="item" key={item}>
                <span className="link" onClick={() => handleKeywordClick(item)}>{item}</span>
                <span className="divider">|</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="right">
        <Link className="more" to={moreLink}>
          {moreText}
        </Link>
        <i className="icon"></i>
      </div>
    </HeaderV1Wrapper>
  )
}

export default memo(SectionHeaderV1)
