import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.p`
    position: relative;
    color: white;
    font-size: 1.4rem;
    margin: 12px 0;
    z-index: 10;
    a {
        color: white;
    }
`;

const Footer = () => <FooterContainer>This content is built with <a href="https://www.gatsbyjs.org/">Gatsby</a></FooterContainer>;

export default Footer;
