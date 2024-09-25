import { makeAutoObservable } from 'mobx';

export enum ModalTypes {
  organizations = 'organizations',
  workers = 'workers',
}

export class AppStore {
  modalOpened: boolean = false;
  modalType: ModalTypes | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  openModal(type: ModalTypes): void {
    this.modalOpened = true;
    this.modalType = type;
  }

  isOrganizationModal(): boolean {
    return this.modalType === ModalTypes.organizations;
  }

  isWorkersModal(): boolean {
    return this.modalType === ModalTypes.workers;
  }

  closeModal(): void {
    this.modalOpened = false;
    this.modalType = null;
  }
}

const appStore = new AppStore();
export default appStore;
