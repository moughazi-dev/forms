import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GenericFormComponent} from "./generic-form/generic-form.component";

const routes: Routes = [
  {
    path: 'generic-form',
    component: GenericFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
