import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

interface Task {
  title: string;
}

@Injectable()
export class TasksService {
  list: Array<Task> = [];
  constructor(public logger: LoggerService) {
    this.logger.add('TasksService Construcuted');
  }

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
