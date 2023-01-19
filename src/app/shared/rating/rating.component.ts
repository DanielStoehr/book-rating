import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'br-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  standalone: true,
})
export class RatingComponent implements OnChanges {
  @Input() value?: number;
  displayedText = '';

  ngOnChanges() {
    this.generateText();
  }

  generateText() {
    if (!this.value) return;
    this.displayedText = '';
    const roundedValue = Math.floor(this.value);
    for (let i = 0; i < roundedValue; i++) {
      this.displayedText += '*';
    }
  }
}
