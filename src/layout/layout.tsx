import { Link, Outlet } from 'react-router-dom';
import { ModalModule } from '../modules';
import { Button } from '@mui/material';

export const Layout: React.FC = () => {
  const clearStorageHandler = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <header>
        <nav>
          <Link to="/">Главная</Link>
          <Link to="/organizations">Организации</Link>
          <Link to="/workers">Сотрудники</Link>
          <Button onClick={clearStorageHandler} variant="text">
            Очистить localstorage
          </Button>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <ModalModule />
    </>
  );
};
