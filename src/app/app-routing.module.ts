import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsInfoComponent } from './students-info/students-info.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "info",
    component: StudentsInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
