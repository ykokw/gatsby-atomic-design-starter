import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import HeadTitle from '../atoms/HeadTitle';

const LinkContainer = styled(Link)`
  color: white;
  text-decoration: none;
`;

const LinkWithDecorationContainer = styled(LinkContainer)`
  text-decoration: underline;
`;

const HeaderContainer = styled.div`
  p {
    margin: 12px 0;
  }
  font-size: 1.4rem;
`;

const Header = ({ siteTitle }) => (
    <HeaderContainer>
      <HeadTitle level={1}><LinkContainer to="/" >{siteTitle}</LinkContainer></HeadTitle>
      <p><LinkWithDecorationContainer to="/tags">tags</LinkWithDecorationContainer></p>
    </HeaderContainer>
)

export default Header;