import React from 'react';

import Background from '../atoms/_layout/Background';
import Header from '../molecules/Header';
import PostList from '../organisms/PostList';
import Centered from '../atoms/_layout/Centered';
import Footer from '../molecules/Footer';

const IndexTemplate = ({ siteTitle, posts }) => (
    <Background>
        <Centered>
            <Header siteTitle={siteTitle} />
            <PostList posts={posts} />
            <Footer />
        </Centered>
    </Background>
)

export default IndexTemplate;