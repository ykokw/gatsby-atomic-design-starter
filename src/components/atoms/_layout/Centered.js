import React from 'react';
import styled from 'styled-components';

const CenteredWrapper = styled.div`
    display: block;
    height: 100%;
    padding: 10px;
    overflow: scroll;
`;
const CenteredContainer = styled.div`
    max-width: 800px;
    margin: 0 auto 48px;
`;

const Centered = ({ children }) => (
    <CenteredWrapper>
        <CenteredContainer>{children}</CenteredContainer>
    </CenteredWrapper>
);

export default Centered;