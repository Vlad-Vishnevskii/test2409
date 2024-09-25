import { Link, Outlet } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { ModalModule } from '../modules';

export const Layout: React.FC = observer(() => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Главная</Link>
          <Link to="/organizations">Организации</Link>
          <Link to="/workers">Сотрудники</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <ModalModule />
    </>
  );
});
