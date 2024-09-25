import { Link, Outlet } from 'react-router-dom';

export const Header: React.FC = () => {
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
    </>
  );
};
