import { Link, Outlet } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Главная</Link>
          <Link to="/org">Организации</Link>
          <Link to="/sotr">Сотрудники</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
