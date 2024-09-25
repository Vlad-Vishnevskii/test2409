import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import workersStore from '../../store/workers-store/workers.store';
import organizationsStore from '../../store/organizations-store/organizations.store';

export const MainPage: React.FC = observer(() => {
  const [newWorker, setNewWorker] = useState<string>('');
  const [newOrg, setNewOrg] = useState<string>('');

  const handleAdd = () => {
    if (newWorker.trim()) {
      workersStore.addItem(newWorker);
      setNewWorker('');
    }
  };

  const handleAddOrg = () => {
    if (newOrg.trim()) {
      organizationsStore.addItem(newOrg);
      setNewOrg('');
    }
  };

  return (
    <>
      <h1>Главная</h1>
      <p>Описание</p>
      <input
        type="text"
        value={newWorker}
        onChange={(e) => setNewWorker(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <input
        type="text"
        value={newOrg}
        onChange={(e) => setNewOrg(e.target.value)}
      />
      <button onClick={handleAddOrg}>AddOrg</button>
    </>
  );
});
