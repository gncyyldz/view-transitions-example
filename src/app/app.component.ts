import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  template: `
    <a routerLink="persons">Persons</a> <br>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {

}
