import React from 'react';
import styles from './styles.module.scss';
import { Formik, Form, ErrorMessage } from 'formik';
import organizationsStore from '../../store/organizations-store/organizations.store';

type Props = {
  onClose: () => void;
  isEditModal: boolean;
  editingId: string;
};

export const ModalOrganizationsComponent: React.FC<Props> = ({
  onClose,
  isEditModal,
  editingId,
}) => {
  const editingItem = organizationsStore.getItemById(editingId);
  const initialFromValues = editingItem
    ? {
        name: editingItem.name,
        adress: editingItem.adress,
        legalAdress: editingItem.legalAdress,
      }
    : { name: '', adress: '', legalAdress: '' };
  const alertMessage = isEditModal
    ? 'Организация обновленна'
    : 'Организация добавленна';
  return (
    <div className={styles.modalWorkers}>
      <h2>
        {isEditModal ? 'Редактировать организацию' : 'Добавить организацию'}
      </h2>
      <Formik
        initialValues={initialFromValues}
        onSubmit={(values, { setSubmitting }) => {
          if (isEditModal) {
            organizationsStore.updateItem(values, editingId);
          } else {
            organizationsStore.addItem(values);
          }
          setTimeout(() => {
            onClose();
            alert(alertMessage);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, handleChange, handleBlur, isSubmitting }) => (
          <Form className={styles.modalWorkers_form}>
            <input
              className={styles.modalWorkers_field}
              type="text"
              name="name"
              placeholder="Название"
              onChange={handleChange}
              onBlur={handleBlur}
              required
              value={values.name}
            />
            <ErrorMessage name="name" component="div" />
            <input
              className={styles.modalWorkers_field}
              type="text"
              name="adress"
              placeholder="Физический адрес"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.adress}
            />
            <input
              className={styles.modalWorkers_field}
              type="text"
              name="legalAdress"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Юридический адрес"
              value={values.legalAdress}
            />
            <button type="submit" disabled={isSubmitting}>
              Сохранить
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
