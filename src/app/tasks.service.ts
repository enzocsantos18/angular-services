import { Injectable } from '@angular/core';

interface Task {
  title: string;
}

@Injectable()
export class TasksService {
  list: Array<Task> = [];
  constructor() {}

  getList() {
    return this.list;
  }

  add(title: string) {
    this.list.push({ title });
  }

  remove(index: number) {
    console.log('teste');
    this.list.splice(index, 1);
  }
}
