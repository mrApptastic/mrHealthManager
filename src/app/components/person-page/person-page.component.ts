import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/models/person';
import { DataService } from 'src/app/services/data.service';
declare function dataHussar(element, dataset, settings): void;

@Component({
  selector: 'app-person-page',
  templateUrl: './person-page.component.html',
  styleUrls: ['./person-page.component.scss']
})
export class PersonPageComponent implements OnInit {
  id: number;
  person: Person;
  bmiGraph: any;

  constructor(private route: ActivatedRoute, private data: DataService) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('Id'), 10);
    this.person = this.data.getPerson(this.id);
    setTimeout(() => {
      this.bmiGraph = new dataHussar('bmiGraph', [
        {Id: 1, Label: '01-2013', Value: 7},
        {Id: 2, Label: '02-2013', Value: 5},
        {Id: 3, Label: '03-2013', Value: 27},
        {Id: 4, Label: '04-2013', Value: 30},
        {Id: 5, Label: '05-2013', Value: 39},
        {Id: 6, Label: '06-2013', Value: 31},
        {Id: 7, Label: '07-2013', Value: 40},
        {Id: 8, Label: '08-2013', Value: 28},
        {Id: 9, Label: '09-2013', Value: 24},
        {Id: 10, Label: '10-2013', Value: 38},
        {Id: 11, Label: '11-2013', Value: 51},
        {Id: 12, Label: '12-2013', Value: 67},
        {Id: 13, Label: '01-2014', Value: 53},
        {Id: 14, Label: '02-2014', Value: 48},
        {Id: 15, Label: '03-2014', Value: 37},
        {Id: 16, Label: '04-2014', Value: 43},
        {Id: 17, Label: '05-2014', Value: 37},
        {Id: 18, Label: '06-2014', Value: 42},
        {Id: 19, Label: '07-2014', Value: 53},
        {Id: 20, Label: '08-2014', Value: 54},
        {Id: 21, Label: '09-2014', Value: 63},
        {Id: 22, Label: '10-2014', Value: 87},
        {Id: 23, Label: '11-2014', Value: 107},
        {Id: 24, Label: '12-2014', Value: 124},
        {Id: 25, Label: '01-2015', Value: 123},
        {Id: 26, Label: '02-2015', Value: 143},
        {Id: 27, Label: '03-2015', Value: 162},
        {Id: 28, Label: '04-2015', Value: 185},
        {Id: 29, Label: '05-2015', Value: 202},
        {Id: 30, Label: '06-2015', Value: 187},
        {Id: 31, Label: '07-2015', Value: 205},
        {Id: 32, Label: '08-2015', Value: 210},
        {Id: 33, Label: '09-2015', Value: 224},
        {Id: 34, Label: '10-2015', Value: 219},
        {Id: 35, Label: '11-2015', Value: 242},
        {Id: 36, Label: '12-2015', Value: 233},
        {Id: 37, Label: '01-2016', Value: 233},
        {Id: 38, Label: '02-2016', Value: 234},
        {Id: 39, Label: '03-2016', Value: 247},
        {Id: 40, Label: '04-2016', Value: 259},
        {Id: 41, Label: '05-2016', Value: 257},
        {Id: 42, Label: '06-2016', Value: 249},
        {Id: 43, Label: '07-2016', Value: 241},
        {Id: 44, Label: '08-2016', Value: 229},
        {Id: 45, Label: '09-2016', Value: 215},
        {Id: 46, Label: '10-2016', Value: 227},
        {Id: 47, Label: '11-2016', Value: 218},
        {Id: 48, Label: '12-2016', Value: 218},
        {Id: 49, Label: '01-2017', Value: 203},
        {Id: 50, Label: '02-2017', Value: 192},
        {Id: 51, Label: '03-2017', Value: 188},
        {Id: 52, Label: '04-2017', Value: 189},
        {Id: 53, Label: '05-2017', Value: 179}
        ], {});
    }, 0);
  }

  update(person: Person) {
    this.data.setPerson(person);
  }

}
