import { makeAutoObservable, autorun } from 'mobx';

interface Worker {
  firstName: string;
  lastName: string;
  id?: number;
  fullName?: string;
  organisationId: string;
}

export class WorkersStore {
  workers: Worker[] = [
    {
      firstName: 'Иван',
      lastName: 'Иванов',
      fullName: 'Иван Иванов',
      id: 1,
      organisationId: '1',
    },
  ];
  filter: string = '';

  constructor() {
    makeAutoObservable(this);

    const savedWorkers = localStorage.getItem('workers');

    if (savedWorkers) {
      this.workers = JSON.parse(savedWorkers);
    }

    autorun(() => {
      localStorage.setItem('workers', JSON.stringify(this.workers));
    });
  }

  addItem(worker: Worker) {
    this.workers.push({
      id: this.getLastWorkerId() + 1,
      firstName: worker.firstName,
      lastName: worker.lastName,
      fullName: `${worker.firstName} ${worker.lastName}`,
      organisationId: worker.organisationId,
    });
  }

  removeItem(worker: Worker) {
    this.workers = this.workers.filter((item) => item.id !== worker.id);
  }

  updateItem(worker: Worker, id: string): void {
    if (id) {
      const findedItem = this.workers.find((item) => +id === item.id);
      if (findedItem) {
        findedItem.firstName = worker.firstName;
        findedItem.lastName = worker.lastName;
        findedItem.fullName = `${worker.firstName} ${worker.lastName}`;
        findedItem.organisationId = worker.organisationId;
      }
    }
  }

  getItemById(id: string): Worker | null {
    if (id) {
      return this.workers.find((item) => +id === item.id) ?? null;
    }

    return null;
  }

  setFilter(filter: string | null) {
    if (filter) {
      this.filter = filter;
    }
  }

  get filterWorkers(): Worker[] {
    if (this.filter) {
      return this.workers.filter((item) => this.filter === item.organisationId);
    } else {
      return this.workers;
    }
  }

  getLastWorkerId(): number {
    return this.workers[this.workers.length - 1]?.id ?? 0;
  }
}

const workersStore = new WorkersStore();
export default workersStore;
