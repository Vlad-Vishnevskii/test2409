import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Table } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { observer } from 'mobx-react-lite';
import workersStore from '../../store/workers-store/workers.store';
import organizationsStore from '../../store/organizations-store/organizations.store';
import appStore from '../../store/app-store/app.store';
import { ModalTypes } from '../../store/app-store/app.store';
import { Button } from '@mui/material';

import styles from './styles.module.scss';

export const TableWorkersComponent: React.FC = observer(() => {
  const { search } = useLocation();
  const filterByOrganisation = new URLSearchParams(search).get('org');

  const handleOpenModal = () => {
    appStore.openModal(ModalTypes.workers);
  };

  const handleOpenEditModal = (id: string) => {
    if (id) {
      appStore.openModal(ModalTypes.workersEdit, id);
    }
  };

  useEffect(() => {
    workersStore.setFilter(filterByOrganisation);
  }, [filterByOrganisation]);

  return (
    <div className={styles.tableOrganization}>
      {filterByOrganisation && (
        <span
          style={{ fontWeight: '700' }}
        >{`Список по оргагнизации: "${organizationsStore.getNameById(
          filterByOrganisation
        )}"`}</span>
      )}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: '700' }}>Организация</TableCell>
              <TableCell style={{ fontWeight: '700' }}>Сотрудник</TableCell>
              <TableCell style={{ fontWeight: '700' }}>Фамилия</TableCell>
              <TableCell style={{ fontWeight: '700' }}>Имя</TableCell>
              <TableCell style={{ fontWeight: '700' }}>
                Табельный номер
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {workersStore.filterWorkers.map((worker) => (
              <TableRow
                key={worker.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {organizationsStore.getItemById(worker.organisationId)?.name}
                </TableCell>
                <TableCell>{worker.fullName}</TableCell>
                <TableCell>{worker.firstName}</TableCell>
                <TableCell>{worker.lastName}</TableCell>
                <TableCell>{worker.id}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="success"
                    style={{ margin: '0 5px' }}
                    onClick={() => handleOpenEditModal(`${worker.id}`)}
                  >
                    Редактировать
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    style={{ margin: '0 5px' }}
                    onClick={() => workersStore.removeItem(worker)}
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
        Добавить сотрудника
      </Button>
    </div>
  );
});
