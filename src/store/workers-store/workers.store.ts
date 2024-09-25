import { makeAutoObservable } from 'mobx';

interface Worker {
  firstName: string;
  lastName: string;
  id: number;
  fullName: string;
  organization: number;
}

export class WorkersStore {
  workers: Worker[] = [
    {
      firstName: 'Иван',
      lastName: 'Иванов',
      fullName: 'Иван Иванов',
      id: 1,
      organization: 1,
    },
  ];
  lastWorkerId = this.getLastWorkerId();

  constructor() {
    makeAutoObservable(this);
  }

  addItem(worker: string) {
    this.workers.push({
      id: ++this.lastWorkerId,
      firstName: worker,
      lastName: worker,
      fullName: `${worker} ${worker} ${worker}`,
      organization: 1,
    });
  }

  getLastWorkerId(): number {
    return this.workers[this.workers.length - 1]?.id ?? 0;
  }
}

const workersStore = new WorkersStore();
export default workersStore;
