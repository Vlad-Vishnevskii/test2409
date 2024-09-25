import React from 'react';
import { Table } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import organizationsStore from '../../store/organizations-store/organizations.store';
import appStore from '../../store/app-store/app.store';
import { observer } from 'mobx-react-lite';
import { ModalTypes } from '../../store/app-store/app.store';
import { Button } from '@mui/material';
import styles from './styles.module.scss';

export const TableOrganizationsComponent: React.FC = observer(() => {
  const { organizations } = organizationsStore;

  const handleOpenModal = () => {
    appStore.openModal(ModalTypes.organizations);
  };

  const handleOpenEditModal = (id: string) => {
    if (id) {
      appStore.openModal(ModalTypes.organizationsEdit, id);
    }
  };

  return (
    <div className={styles.tableOrganization}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: '700' }}>Организация</TableCell>
              <TableCell style={{ fontWeight: '700' }}>id</TableCell>
              <TableCell style={{ fontWeight: '700' }}>
                Юридический адресс
              </TableCell>
              <TableCell style={{ fontWeight: '700' }}>
                Физический адресс
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
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
                <TableCell>
                  <Button href={`/workers?org=${item.id}`} variant="outlined">
                    Сотрудники организации
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="success"
                    style={{ margin: '0 5px' }}
                    onClick={() => handleOpenEditModal(`${item.id}`)}
                  >
                    Редактировать
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    style={{ margin: '0 5px' }}
                    onClick={() => organizationsStore.removeItem(item)}
                  >
                    Удалить
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" onClick={handleOpenModal}>
        Добавить Организацию
      </Button>
    </div>
  );
});
