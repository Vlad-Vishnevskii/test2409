import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Layout } from '../layout';

import { MainPage, WorkersPage, OrganizationsPage } from '../pages';

export function RoutesComponent(): React.ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/organizations" element={<OrganizationsPage />} />
          <Route path="/workers" element={<WorkersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
