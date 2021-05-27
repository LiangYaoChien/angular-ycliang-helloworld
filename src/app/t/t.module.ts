import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { T1Component } from './t1/t1.component';
import { T2Component } from './t2/t2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [T1Component, T2Component]
})
export class TModule { }