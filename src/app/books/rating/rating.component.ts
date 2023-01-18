import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'br-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  standalone: true,
})
export class RatingComponent implements OnInit {
  @Input() value?: number;
  displayedText: string = '';

  ngOnInit() {
    this.generateText();
  }

  generateText() {
    if (!this.value) return;
    let roundedValue = Math.floor(this.value);
    for (let i = 0; i < roundedValue; i++) {
      this.displayedText += '*';
    }
  }
}
