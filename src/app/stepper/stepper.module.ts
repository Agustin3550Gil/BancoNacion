import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Part1Component } from './part1/part1.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePageRoutingModule } from '../home/home-routing.module';



@NgModule({
  declarations: [Part1Component],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomePageRoutingModule,

  ],
  exports: [
    Part1Component
  ]
})
export class StepperModule { }
