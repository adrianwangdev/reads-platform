import React from 'react'

/* Styles */
import {
  WriterWrapper,
  WriterTitle,
  WriterItem,
  WriterInfo,
  WriterName,
  ArticleAmount,
  LikeAmount,
  FollowButton
} from './writer.styled'

const Writer = ({ writerList }) => {

  const renderWriterList = () => (
    writerList.map((item, index) => (
      <WriterItem key={index}>
        <WriterInfo>
          <WriterName>{item.name}</WriterName>
          <ArticleAmount>{item.articleAmount}篇</ArticleAmount>
          <LikeAmount>{item.likeAmount}</LikeAmount>
        </WriterInfo>
        <FollowButton>追蹤</FollowButton>
      </WriterItem>
    ))
  )

  return (
    <WriterWrapper>
      <WriterTitle>人氣作者</WriterTitle>
      {renderWriterList()}
    </WriterWrapper>
  )
}

export default Writer
