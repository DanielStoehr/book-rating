import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  title = 'Book Rating';
  date = new Date();
  timer: NodeJS.Timer;

  constructor() {
    this.timer = setInterval(() => {
      this.date = new Date();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
