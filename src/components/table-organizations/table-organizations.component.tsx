import React from 'react';
import { Link } from 'react-router-dom';
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
              <TableCell>Организация</TableCell>
              <TableCell>id</TableCell>
              <TableCell>Юридический адресс</TableCell>
              <TableCell>Физический адресс</TableCell>
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
                  <Link
                    className={styles.tableOrganization_button}
                    to={`/workers?org=${item.id}`}
                  >
                    Сотрудники организации
                  </Link>
                </TableCell>
                <TableCell>
                  <button
                    className={styles.tableOrganization_button}
                    onClick={() => handleOpenEditModal(`${item.id}`)}
                  >
                    Редактировать
                  </button>
                  <button
                    className={styles.tableOrganization_button}
                    onClick={() => organizationsStore.removeItem(item)}
                  >
                    Удалить
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <button
        className={styles.tableOrganization_button}
        onClick={handleOpenModal}
      >
        Добавить Организацию
      </button>
    </div>
  );
});
