import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/models/person';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-person-page',
  templateUrl: './person-page.component.html',
  styleUrls: ['./person-page.component.scss']
})
export class PersonPageComponent implements OnInit {
  id: number;
  person: Person;

  constructor(private route: ActivatedRoute, private data: DataService) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('Id'));
    this.person = this.data.getPerson(this.id);
  }

  update(person: Person) {
    this.data.setPerson(person);
  }

}
