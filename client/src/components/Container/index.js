import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem;
`;

function Container({ ...props }) {
  return <StyledContainer {...props} />;
}

export { Container };
