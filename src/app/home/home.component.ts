import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public timer: TimerService, public logger: LoggerService) {
    this.logger.add('HomeComponent Construcuted');
  }

  ngOnInit() {
    this.logger.add('HomeComponent Initialized');
  }
}
