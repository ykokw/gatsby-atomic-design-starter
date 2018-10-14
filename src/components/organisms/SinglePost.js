import React from 'react';
import styled from 'styled-components';

import HeadTitle from '../atoms/HeadTitle';
import ContentLayout from '../atoms/_layout/Content';

const SinglePostContainer = styled.div`
  color: #444;
  font-size: 1.4rem;
  a {
    color: #444;
  }
  h2 {
    font-size: 1.8rem;
  }
`;


const SinglePost = ({ title, html }) => (
    <ContentLayout className="singlePost">
      <HeadTitle level={2}>{title}</HeadTitle>
      <SinglePostContainer><div dangerouslySetInnerHTML={{ __html: html }} /></SinglePostContainer>
    </ContentLayout>
);

export default SinglePost;