import React, {
  FC,
  memo,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback
} from 'react'
import { SongsWrapper } from './style'
import { useAppDispatch, useAppSelector } from '@/store'
import { changeCurrentPage, changeCurrentPageSize, fetchSongsData } from './store'
import { shallowEqual } from 'react-redux'
import SongsMenusItem from '@/components/songs-menus-item'
import { Pagination } from 'antd'
import { useSearchParams } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const Songs: FC<IProps> = (props) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = Object.fromEntries(searchParams)
  const cat = query.cat
  const limit = query.limit
  const offset = query.offset

  const { songsList, categories, sub, currentPage, currentPageSize } = useAppSelector(
    (state) => ({
      songsList: state.songs.songsList,
      categories: state.songs.categories,
      sub: state.songs.sub,
      currentPage: state.songs.currentPage,
      currentPageSize: state.songs.currentPageSize
    }),
    shallowEqual
  )

  const [isShowSelect, setIsShowSelect] = useState(false)
  const [currentCat, setCurrentCat] = useState('全部')
  const [currentTag, setCurrentTag] = useState('全部')
  // const [currentPage, setCurrentPage] = useState(0)
  // const [currentPageSize, steCurrentPageSize] = useState(35)

  useEffect(() => {
    if (cat) {
      setCurrentTag(cat)
    }
  })

  // console.log(categories)
  // 处理分类标签数据：根据 categories 的 key 值和 sub 中的 category 值进行匹配分组
  const groupedCategories = useMemo(() => {
    const result: Record<string, string[]> = {}

    // 遍历 categories 的每个 key
    if (categories && typeof categories === 'object') {
      Object.keys(categories).forEach((key) => {
        // 将 key 转换为数字，用于匹配 sub 中的 category
        const categoryNum = Number(key)

        // 在 sub 数组中找到所有 category 值等于当前 key 的项
        const matchedItems = sub.filter((item: any) => item.category === categoryNum)

        // 提取这些项的 name 值，放到同一个数组中
        result[key] = matchedItems.map((item: any) => item.name)
      })
    }

    return result
  }, [categories, sub])

  // const groupedCategories1 = useMemo(() => {
  //   const result: Record<string, string[]> = {}
  //   if (categories) {
  //     Object.keys(categories).forEach(key => {
  //       console.log(key)
  //       const categoryNumber = Number(key)
  //       const item = sub.filter((item: any) => item.category === categoryNumber)
  //       result[key] = item.map((item: any) => item.name)
  //     })
  //   }
  //   return result
  // }, [categories, sub])

  // 打印分组结果，方便调试查看

  const dispatch = useAppDispatch()

  const songsPlayListRef = useRef<HTMLDivElement>(null)
  const selectTagRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (offset && limit) {
      console.log(offset, limit)
      dispatch(fetchSongsData({ page: (Number(offset) / Number(limit)), size: Number(limit), cat: currentCat }))
      changeCurrentPage(Number(offset) / Number(limit))
    } else {
      dispatch(fetchSongsData({ page: 0, size: 35, cat: currentCat }))
    }
  }, [dispatch, currentCat])

  function handlePageChange(page: number, size: number) {
    const offsetPage = page - 1
    changeCurrentPageSize(size)
    dispatch(fetchSongsData({ page: offsetPage, size, cat: currentCat }))
    searchParams.set('offset', (offsetPage * 35).toString())
    searchParams.set('limit', size.toString())
    setSearchParams(searchParams)
    changeCurrentPage(page)
    // window.scrollTo(0, 0)
  }

  // 处理选择分类按钮的点击
  function handleSelectBtnClick() {
    setIsShowSelect(!isShowSelect)
  }

  const categoriesEntries = Object.values(categories)
  const groupedCategoriesEntries = Object.values(groupedCategories)

  function handleSelectItemClick(tag: any) {
    setCurrentCat(tag)
    // dispatch(fetchSongsData({ page: 0, size: currentPageSize, cat: currentCat }))
    setIsShowSelect(false)
    setCurrentTag(tag)
    setSearchParams({ cat: tag })
    changeCurrentPageSize(0)
  }

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (selectTagRef.current && !selectTagRef.current.contains(event.target as Node)) {
      setIsShowSelect(false)
    }
  }, [])

  useEffect(() => {
    if (isShowSelect) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isShowSelect, handleClickOutside])

  return (
    <SongsWrapper ref={songsPlayListRef}>
      <div className="header">
        <h3>
          <span className="classification">{currentTag}</span>
          <a className="classification-btn" onClick={handleSelectBtnClick}>
            <i>
              选择分类
              <em className="u-btn"></em>
            </i>
          </a>
          {isShowSelect && (
            <div className="select-catlist" ref={selectTagRef}>
              <i className="icon"></i>
              <div className="select-header">
                <a className="all-btn" onClick={() => handleSelectItemClick('全部')}>
                  全部风格
                </a>
              </div>
              <div className="select-content">
                <div className="content-left">
                  {categoriesEntries &&
                    categoriesEntries?.map((item: any) => {
                      return (
                        <div className="category-item" key={item}>
                          {item}
                        </div>
                      )
                    })}
                </div>
                <div className="content-right">
                  {groupedCategoriesEntries &&
                    groupedCategoriesEntries.map((item: any) => {
                      return (
                        <div className="tag" key={item}>
                          {item.map((tag: any) => {
                            return (
                              <div className="tag-item" key={tag}>
                                <a onClick={() => handleSelectItemClick(tag)}>{tag}</a>
                                <span className="line">|</span>
                              </div>
                            )
                          })}
                        </div>
                      )
                    })}
                </div>
              </div>
            </div>
          )}
        </h3>
        <div className="hot-btn">
          <a className="al" href="#"></a>
        </div>
      </div>
      <div className="songsList">
        {songsList.map((item) => {
          return (
            <div className="item" key={item.id}>
              <SongsMenusItem itemData={item} />
            </div>
          )
        })}
      </div>
      <Pagination
        align="center"
        defaultCurrent={1}
        total={350}
        current={currentPage}
        pageSizeOptions={[10, 20, 35, 50]}
        defaultPageSize={35}
        pageSize={currentPageSize}
        onChange={handlePageChange}
      />
    </SongsWrapper>
  )
}

export default memo(Songs)
