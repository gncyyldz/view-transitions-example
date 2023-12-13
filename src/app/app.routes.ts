import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: "persons", loadComponent: async () => (await import("./components/persons/persons.component")).PersonsComponent },
    { path: "person-detail/:id", loadComponent: async () => (await import("./components/person-detail/person-detail.component")).PersonDetailComponent }
];
