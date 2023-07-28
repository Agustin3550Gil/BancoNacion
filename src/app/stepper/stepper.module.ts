import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Part1Component } from './part1/part1.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [Part1Component],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    Part1Component
  ]
})
export class StepperModule { }
