import React from 'react';
import appStore from '../store/app-store/app.store';
import { observer } from 'mobx-react-lite';
import Modal from '@mui/material/Modal';
import {
  ModalWorkersComponent,
  ModalOrganizationsComponent,
} from '../components';

export const ModalModule: React.FC = observer(() => {
  const handleCloseModal = () => {
    appStore.closeModal();
  };

  if (!appStore.modalOpened) {
    return null;
  }

  return (
    <Modal
      open={appStore.modalOpened}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <>
        {appStore.isWorkersModal() && (
          <ModalWorkersComponent
            onClose={handleCloseModal}
            isEditModal={appStore.isEditModal()}
            editingId={appStore.editingId}
          />
        )}
        {appStore.isOrganizationModal() && (
          <ModalOrganizationsComponent
            onClose={handleCloseModal}
            isEditModal={appStore.isEditModal()}
            editingId={appStore.editingId}
          />
        )}
      </>
    </Modal>
  );
});
