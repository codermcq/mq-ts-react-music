import React, { FC, memo, ReactNode } from 'react'
import { HotAnchorWrapper } from './style'
import SectionHeaderV2 from '@/components/section-header-v2'
import { hotRadios } from "@/assets/data/local-data"
import { getImageSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
}

const HotAnchor: FC<IProps> = (props) => {
  return (
    <HotAnchorWrapper>
      <SectionHeaderV2 title="热门主播" />
      <div className='hot-radios'>
        {
          hotRadios.map(item => {
            return (
              <div className='item' key={item.name}>
                <div className='head'>
                  <img src={getImageSize(item.picUrl, 40)} alt="" />
                </div>
                <div className='info'>
                  <div className='name'>{item.name}</div>
                  <div className='desc'>{item.position}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </HotAnchorWrapper>
  )
}

export default memo(HotAnchor)
