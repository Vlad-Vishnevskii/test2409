import { makeAutoObservable } from 'mobx';

export enum ModalTypes {
  organizations = 'organizations',
  organizationsEdit = 'organizationsEdit',
  workers = 'workers',
  workersEdit = 'workersEdit',
}

export class AppStore {
  modalOpened: boolean = false;
  modalType: ModalTypes | null = null;
  editingId: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  openModal(type: ModalTypes, id?: string): void {
    this.modalOpened = true;
    this.modalType = type;
    if (id) {
      this.editingId = id;
    }
  }

  isOrganizationModal(): boolean {
    return (
      this.modalType === ModalTypes.organizations ||
      this.modalType === ModalTypes.organizationsEdit
    );
  }

  isWorkersModal(): boolean {
    return (
      this.modalType === ModalTypes.workers ||
      this.modalType === ModalTypes.workersEdit
    );
  }

  isEditModal(): boolean {
    return (
      this.modalType === ModalTypes.organizationsEdit ||
      this.modalType === ModalTypes.workersEdit
    );
  }

  closeModal(): void {
    this.modalOpened = false;
    this.modalType = null;
    this.editingId = '';
  }
}

const appStore = new AppStore();
export default appStore;
