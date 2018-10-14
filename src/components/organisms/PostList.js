import React from 'react'

import ContentLayout from '../atoms/_layout/Content';
import PostListItem from '../molecules/PostListItem';

const PostList = ({ posts }) => <ContentLayout>{posts.map(({ path, title, date, tags}) => <PostListItem key={path} path={path} title={title} date={date} tags={tags} />)}</ContentLayout>

export default PostList;