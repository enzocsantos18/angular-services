import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  messages: string[] = [];

  constructor() {
    this.add('LoggerService costructed');
  }

  add(message: string) {
    this.messages.push(new Date() + ' :: ' + message);
  }

  clear() {
    this.messages = [];
  }
}
