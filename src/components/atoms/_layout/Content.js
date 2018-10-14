import React from 'react'
import styled from 'styled-components';

const ContentWrapper = styled.div`
    position: relative;
    display: block;
    background: rgba(255, 255, 255, 0.88);
    box-shadow: 5px 5px 1px rgba(0, 0, 0, 0.25);
    padding: 0 24px 48px;
    min-height: 800px;
    z-index: 10;
`;

const Content = ({ children }) => <ContentWrapper>{children}</ContentWrapper>;

export default Content;
