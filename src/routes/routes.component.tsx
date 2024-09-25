import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Header } from '../components';

import { TableBlock } from '../components/table/table';
import { MainPage } from '../pages';

export function RoutesComponent(): React.ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<MainPage />} />
          <Route path="/org" element={<TableBlock />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
