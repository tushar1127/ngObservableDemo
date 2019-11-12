import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ParamMapExampleRoutingModule } from './param-map-example.routing.module';
import { OneComponent } from './one/one-component.component';
import { TwoComponent } from './two/two-component.component';

@NgModule({
  declarations: [
    OneComponent,
    TwoComponent    
  ],
  imports: [
    CommonModule,
    RouterModule,
    ParamMapExampleRoutingModule
  ]
})

export class ParamMapExampleModule { }