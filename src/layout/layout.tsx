import { Link, Outlet } from 'react-router-dom';
import { ModalModule } from '../modules';
import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';

import styles from './styles.module.scss';

export const Layout: React.FC = () => {
  const clearStorageHandler = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <header>
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button>
            <Link className={styles.link} to="/">
              Главная
            </Link>
          </Button>
          <Button>
            <Link className={styles.link} to="/organizations">
              Организации
            </Link>
          </Button>
          <Button>
            <Link className={styles.link} to="/workers">
              Сотрудники
            </Link>
          </Button>
          <Button onClick={clearStorageHandler}>Очистить localstorage</Button>
        </ButtonGroup>
      </header>
      <main>
        <Outlet />
      </main>
      <ModalModule />
    </>
  );
};
