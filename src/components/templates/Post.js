import React from 'react';

import Background from '../atoms/_layout/Background';
import Header from '../molecules/Header';
import SinglePost from '../organisms/SinglePost';
import Centered from '../atoms/_layout/Centered';
import Footer from '../molecules/Footer';

const PostTemplate = ({ siteTitle, post }) => (
    <Background>
        <Centered>
            <Header siteTitle={siteTitle} />
            <SinglePost title={post.frontmatter.title} html={post.html} />
            <Footer />
        </Centered>
    </Background>
)

export default PostTemplate;