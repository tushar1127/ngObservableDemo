import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OneComponent } from './one/one-component.component';
import { TwoComponent } from './two/two-component.component';

const routes:Routes= [
      {
        component:OneComponent,
        path:''
      },
      {
        component:OneComponent,
        path:'one'
      },
      {
        component:TwoComponent,
        path:'Two'
      }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class ParamMapExampleRoutingModule { }
