import React from 'react'

/* Styles */
import {
  ListWrapper,
  ListItem,
  ListTitle,
  ListDescription,
  ListDetail,
  CreateDate,
  LikeAmount,
  CommentAmount
} from './List.styled'

const List = () => (
  <ListWrapper>
    <ListItem>
      <ListTitle>最好的報復</ListTitle>
      <ListDescription>
        1 朋友甲：45岁，人长得漂亮，看起来像35岁。在小镇上开了一家烟火铺，一月能挣七八千。她老公是镇中学一名教师，工资四千多，顾...
      </ListDescription>
      <ListDetail>
        <CreateDate>2021-02-28</CreateDate>
        <LikeAmount>410</LikeAmount>
        <CommentAmount>98</CommentAmount>
      </ListDetail>
    </ListItem>

    <ListItem>
      <ListTitle>最好的報復</ListTitle>
      <ListDescription>
        1 朋友甲：45岁，人长得漂亮，看起来像35岁。在小镇上开了一家烟火铺，一月能挣七八千。她老公是镇中学一名教师，工资四千多，顾...
      </ListDescription>
      <ListDetail>
        <CreateDate>2021-02-28</CreateDate>
        <LikeAmount>410</LikeAmount>
        <CommentAmount>98</CommentAmount>
      </ListDetail>
    </ListItem>
  </ListWrapper>
)

export default List
