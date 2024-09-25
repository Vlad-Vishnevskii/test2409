import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Header } from '../components';

import { MainPage, WorkersPage, OrganizationsPage } from '../pages';

export function RoutesComponent(): React.ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<MainPage />} />
          <Route path="/organizations" element={<OrganizationsPage />} />
          <Route path="/workers" element={<WorkersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
