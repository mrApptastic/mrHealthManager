import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  @Input() image!: string;
  @Input() text!: string;

  constructor() { }

  ngOnInit(): void {
    if (!this.image) {
      this.image = './../../../assets/media/Rays.png';
    }
    if (!this.text) {
      this.text = 'Loading data...';
    }
  }

}
