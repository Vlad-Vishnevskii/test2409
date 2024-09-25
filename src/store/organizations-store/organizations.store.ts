import { makeAutoObservable } from 'mobx';

interface Organization {
  name: string;
  id: number;
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
  lastOrganizationId = 1;

  constructor() {
    makeAutoObservable(this);
  }

  addItem(organization: string) {
    this.organizations.push({
      id: this.lastOrganizationId++,
      name: organization,
      legalAdress: 'Москва, ул Бауманская, д. 10',
      adress: 'Москва, ул Бауманская, д. 10',
    });
    console.log(this.organizations);
  }
}

const organizationsStore = new OrganizationsStore();
export default organizationsStore;
