import { Component, inject } from '@angular/core';
import { persons } from '../../datas';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-detail',
  standalone: true,
  imports: [],
  template: `
  {{person.name}} <br>
  <img [src]="person.photo" [style]="person.viewTransitionName">
  `
})
export class PersonDetailComponent {
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  person: any;
  ngOnInit() {
    const id = this.activatedRoute.snapshot.params["id"];
    this.person = persons.find(p => p.id == id);
    console.log(this.person);
  }
}