import React from 'react'
import { DateTime } from 'luxon';
import styled from 'styled-components';

const PostListItemContainer = styled.div`
    padding-top: 48px;
    @media screen and (max-width: 500px) {
        padding-top: 24px;
    }
    color: #444;
    p {
        margin: 0;
    }
    .date, .tags {
        font-size: 1.4rem;
    }
    .title {
        font-size: 2.4rem;
        @media screen and (max-width: 500px) {
            font-size: 1.8rem;
        }
        a {
            color: #444;
        }
    }
`;

const PostListItem = ({ title, date, tags, path}) => (
    <PostListItemContainer>
        <p className="date">{DateTime.fromISO(date).toFormat('yyyy/MM/dd')}</p>
        <p className="tags">[ { (tags|| []).join(' / ')} ]</p>
        <p className="title"><a href={path} >{title}</a></p>
    </PostListItemContainer>
)

export default PostListItem;