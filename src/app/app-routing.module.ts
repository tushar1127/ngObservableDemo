import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralDetailsComponent } from './general-details/general-details.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { ArithmaticComponent } from './arithmatic/arithmatic.component';
import { SequencialHttpCallComponent } from './sequencial-http-call/sequencial-http-call.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { ResolveGuard } from 'src/services/resolve.gaurd';

const routes: Routes = [
  {
    path:'',
    redirectTo:'general-details',
    pathMatch:'full'
  },
  {
    path:'general-details',
    component:GeneralDetailsComponent
  },
  {
    path:'nested-form',
    component:NestedFormComponent
  },
  {
    path:'arithmatic',
    component:ArithmaticComponent
  },
  {
    path:'sequence',
    component:SequencialHttpCallComponent
  },
  {
    path:'profile/:userId',
    component:ProfileComponentComponent,
    resolve: {
      profile: ResolveGuard
    }        
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
