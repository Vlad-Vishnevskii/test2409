import React from 'react';
import { Table } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import organizationsStore from '../../store/organizations-store/organizations.store';
import { observer } from 'mobx-react-lite';

export const TableOrganizationsComponent: React.FC = observer(() => {
  const { organizations } = organizationsStore;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Организация</TableCell>
            <TableCell>id</TableCell>
            <TableCell>Юридический адресс</TableCell>
            <TableCell>Физический адресс</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {organizations.map((item) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.legalAdress}</TableCell>
              <TableCell>{item.adress}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});
