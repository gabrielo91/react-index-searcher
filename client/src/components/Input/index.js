import React from 'react';
import styled from 'styled-components';
import { Input as MaterialInput } from '@mui/material';

const StyledInput = styled(MaterialInput)`
  margin: 2rem;
  width: 40rem;
`;

function Input({ ...props }) {
  return <StyledInput {...props} />;
}

export { Input };
