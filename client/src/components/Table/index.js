import React from 'react';
import styled from 'styled-components';
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from '@mui/material';

const StyledTable = styled(Table)`
  margin: 2rem;
  max-width: 60rem;
`;

function DataTable({ data }) {
  if (data.length < 1) {
    return <div> No data to show</div>;
  }

  return (
    <StyledTable>
      <TableHead>
        <TableRow>
          <TableCell align="center">Username</TableCell>
          <TableCell align="center">Post date</TableCell>
          <TableCell align="center">Message</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(({ username, post_date, message }) => {
          return (
            <TableRow
              key={`${username}_${post_date}`}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {username}
              </TableCell>
              <TableCell align="right">{post_date}</TableCell>
              <TableCell align="right">{message}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </StyledTable>
  );
}

export { DataTable };
