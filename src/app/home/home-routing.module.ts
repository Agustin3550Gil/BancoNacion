import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { Part1Component } from '../stepper/part1/part1.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  { path: 'part1', component: Part1Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
