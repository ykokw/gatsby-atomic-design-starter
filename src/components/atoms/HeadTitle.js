import React from 'react';
import styled from 'styled-components';

const H1Container = styled.h1`
  font-size: 1.8rem;
  margin: 12px 0;
`;

const HeadTitle = ({ level, children}) => {
    let HeaderComponent = null;
    switch (level) {
        case 1:
          HeaderComponent = ( children ) => <H1Container>{children}</H1Container>;
          break;
        case 2:
          HeaderComponent = ( children ) => <h2>{children}</h2>;
          break;
        case 3:
          HeaderComponent = ( children ) => <h3>{children}</h3>;
          break;
        case 4:
          HeaderComponent = ( children ) => <h4>{children}</h4>;
          break;
        case 5:
          HeaderComponent = ( children ) => <h5>{children}</h5>;
          break;
        default:
          HeaderComponent = ( children ) => <h1>{children}</h1>;
          break;
    }
    return HeaderComponent(children);
}
 
export default HeadTitle;