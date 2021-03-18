import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { actions } from './stores'

/* Styles */
import {
  RecommendWrapper,
  RecommendTitle,
  RecommendSwitch,
  RecommendList,
  RecommendItem
} from './searchRecommend.styled'

/* Images */
import { ReactComponent as RefreshIcon } from 'assets/images/icons/refresh.svg'

const SearchRecommend = ({
  recommendList,
  page,
  totalPage,
  getRecommendList,
  handleListMouseEnter,
  handleListMouseLeave,
  handleListChangePage
}) => {

  const spinIconRef = useRef()

  useEffect(getRecommendList, [getRecommendList])

  const renderList = (list, page) => {
    const pageList = []
    /* get the 10 items from recommend list */
    for (let i = (page - 1) * 10; i < page * 10; i++) {
      pageList.push(list[i])
    }
    return (
      pageList.map((item, index) => (
      <RecommendItem key={index}>{item}</RecommendItem>
    ))
    )
  }
  
  return (
    <RecommendWrapper
      onMouseEnter={handleListMouseEnter}
      onMouseLeave={handleListMouseLeave}
    >
      <RecommendTitle>
        <p>熱門推薦</p>
        <RecommendSwitch
          onClick={() => handleListChangePage(page, totalPage, spinIconRef.current)}
        >
          <RefreshIcon ref={spinIconRef} />
          換一批
        </RecommendSwitch>
      </RecommendTitle>
      <RecommendList>
        {renderList(recommendList, page) }
      </RecommendList>
    </RecommendWrapper>
  )
}

const mapStateToProps = state => ({
  recommendList: state.recommend.recommendList,
  page: state.recommend.page,
  totalPage: state.recommend.totalPage
})

const mapDispatchToProps = {
  getRecommendList: actions.getRecommendList,
  handleListMouseEnter: actions.handleListMouseEnter,
  handleListMouseLeave: actions.handleListMouseLeave,
  handleListChangePage: actions.handleListChangePage
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchRecommend)
