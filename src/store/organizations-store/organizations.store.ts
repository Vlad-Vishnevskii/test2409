import { makeAutoObservable, autorun } from 'mobx';

export interface Organization {
  name: string;
  id?: number;
  legalAdress: string;
  adress: string;
}

export class OrganizationsStore {
  organizations: Organization[] = [
    {
      name: 'Рога и копыта',
      id: 1,
      legalAdress: 'Москва, ул Бауманская, д. 10',
      adress: 'Москва, ул Бауманская, д. 10',
    },
  ];

  constructor() {
    makeAutoObservable(this);

    const savedOrganizations = localStorage.getItem('organizations');

    if (savedOrganizations) {
      this.organizations = JSON.parse(savedOrganizations);
    }

    autorun(() => {
      localStorage.setItem('organizations', JSON.stringify(this.organizations));
    });
  }

  addItem(organization: Organization) {
    this.organizations.push({
      id: this.getLastOrganizationId() + 1,
      name: organization.name,
      legalAdress: organization.legalAdress,
      adress: organization.adress,
    });
  }

  removeItem(organization: Organization) {
    this.organizations = this.organizations.filter(
      (item) => item.id !== organization.id
    );
  }

  updateItem(organization: Organization, id: string): void {
    if (id) {
      const findedItem = this.organizations.find((item) => +id === item.id);
      if (findedItem) {
        findedItem.name = organization.name;
        findedItem.adress = organization.adress;
        findedItem.legalAdress = organization.legalAdress;
      }
    }
  }

  getItemById(id: string): Organization | null {
    if (id) {
      return this.organizations.find((item) => +id === item.id) ?? null;
    }

    return null;
  }

  getNameById(id: string): string {
    if (id) {
      return (
        this.organizations
          .find((item) => +id === item.id)
          ?.name.toUpperCase() ?? ''
      );
    }

    return '';
  }

  getLastOrganizationId(): number {
    return this.organizations[this.organizations.length - 1]?.id ?? 0;
  }
}

const organizationsStore = new OrganizationsStore();
export default organizationsStore;
