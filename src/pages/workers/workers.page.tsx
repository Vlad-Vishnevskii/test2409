import { TableWorkersComponent } from '../../components';
import { Link } from 'react-router-dom';

export const WorkersPage = () => {
  return (
    <>
      <h1 style={{ padding: '0 20px' }}>Сотрудники</h1>
      <Link style={{ padding: '0 20px' }} to="/organizations">
        К списку организации
      </Link>
      <TableWorkersComponent />
    </>
  );
};
