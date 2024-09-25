import { TableWorkersComponent } from '../../components';
import { Button } from '@mui/material';

export const WorkersPage = () => {
  return (
    <>
      <h1 style={{ padding: '0 20px' }}>Сотрудники</h1>
      <Button style={{ padding: '0 20px' }} href="/organizations">
        К списку организации
      </Button>
      <TableWorkersComponent />
    </>
  );
};
