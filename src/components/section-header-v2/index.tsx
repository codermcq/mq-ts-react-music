import React, { FC, memo, ReactNode } from 'react'
import { HeaderV2Wrapper } from './style'

interface IProps {
  children?: ReactNode
  title?: string
  moreText?: string
  moreLink?: string
}

const SectionHeaderV2: FC<IProps> = (props) => {
  const { title = "默认标题", moreText , moreLink } = props
  return (
    <HeaderV2Wrapper>
      <h3 className="header">
        <span className='title'>{title}</span>
        {moreText && moreLink && <a className='moreText' href={moreLink}>{moreText}</a>}
      </h3>
    </HeaderV2Wrapper>
  )
}

export default memo(SectionHeaderV2)
