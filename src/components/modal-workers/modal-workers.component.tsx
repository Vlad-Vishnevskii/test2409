import React from 'react';
import styles from './styles.module.scss';
import { Formik, Form, ErrorMessage } from 'formik';
import workersStore from '../../store/workers-store/workers.store';
import organizationsStore from '../../store/organizations-store/organizations.store';

type Props = {
  onClose: () => void;
  isEditModal: boolean;
  editingId: string;
};

export const ModalWorkersComponent: React.FC<Props> = ({
  onClose,
  isEditModal,
  editingId,
}) => {
  const editingItem = workersStore.getItemById(editingId);
  const initialFromValues = editingItem
    ? {
        firstName: editingItem.firstName,
        lastName: editingItem.lastName,
        organisationId: editingItem.organisationId,
      }
    : {
        firstName: '',
        lastName: '',
        organisationId: '1',
      };

  const alertText = isEditModal ? 'Сотрудник обновлен' : 'Сотрудник добавлен';

  return (
    <div className={styles.modalWorkers}>
      <h2>
        {isEditModal ? 'Редактировать сотрудника' : 'Добавить сотрудника'}
      </h2>
      <Formik
        initialValues={initialFromValues}
        onSubmit={(values, { setSubmitting }) => {
          if (isEditModal) {
            workersStore.updateItem(values, editingId);
          } else {
            workersStore.addItem(values);
          }
          setTimeout(() => {
            onClose();
            alert(alertText);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, handleChange, handleBlur, isSubmitting }) => (
          <Form className={styles.modalWorkers_form}>
            <input
              className={styles.modalWorkers_field}
              type="text"
              name="firstName"
              placeholder="Имя"
              onChange={handleChange}
              onBlur={handleBlur}
              required
              value={values.firstName}
            />
            <ErrorMessage name="name" component="div" />
            <input
              className={styles.modalWorkers_field}
              type="text"
              name="lastName"
              placeholder="Фамилия"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
            />
            <select
              className={styles.modalWorkers_field}
              name="organisationId"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.organisationId}
            >
              {organizationsStore.organizations.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <button type="submit" disabled={isSubmitting}>
              Сохранить
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
