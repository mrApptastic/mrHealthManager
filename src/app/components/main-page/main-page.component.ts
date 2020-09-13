import { Component, OnInit, } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/person';
import { Plan } from 'src/app/models/plan';

declare function captainCanvas(canvas, tools, settings): void;

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  cpt: any;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.cpt = new captainCanvas('cpt', 'tls', null);
    });
  }

}
