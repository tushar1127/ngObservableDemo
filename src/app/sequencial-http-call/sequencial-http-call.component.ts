import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, from, pipe, Observable } from 'rxjs'; 
import { map, delay, mergeMap, concatMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sequencial-http-call',
//  templateUrl: './sequencial-http-call.component.html',
template:`
<form [formGroup]="loginForm">
  <input type="text" class="form-control" formControlName="username">
  <input type="text" class="form-control" formControlName="password">
  <button type="button" (click)="login()">login</button>
  <button type="button" *ngIf="data" (click)="profile()">Profile</button>
</form>
`,
  styleUrls: ['./sequencial-http-call.component.css']
})
export class SequencialHttpCallComponent implements OnInit {
  loginForm:FormGroup;
  caller$: Observable<any>;
  
  profile$ = (param)=>{ 
    const token =   param.id_token;
    // const httpOptions = {
    //   headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` })
    // };
    return this.httpClient.get('https://uat-api.taxbuddy.com/txbdy_ms_user/profile/'+param.userId )
  }

  login$ = (requestbody)=>{
    return this.httpClient.post('https://uat-api.taxbuddy.com/account/token',requestbody)
  }

  profile2$ = (param)=>{ 
  //   const token =   param.id_token;
  //   const httpOptions = {
  //     headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` })
  // };
    
  return this.httpClient.get('https://uat-api.taxbuddy.com/txbdy_ms_user/profile/'+param.userId );
}
  data: any;
  

  constructor( private httpClient:HttpClient, private fb:FormBuilder,private router:Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username : 'tushar.khairnar@itariumtech.com',
      password : 'Test@123',
      accessToken: '',
      outhProvider: ''
    })
  }

  login(){
    if(this.loginForm.value){
      this.caller$ = this.login$(this.loginForm.value).pipe(
        tap((param1:any) => sessionStorage.setItem('authorizationToken', param1.id_token )),
        concatMap(param1 => this.profile$(param1)), 
      );
      this.caller$.subscribe(res=> {console.log(res) 
          this.data = res;
      } 

      )
    }
  }


  profile(){
    this.router.navigate(['/profile',this.data.userId])
  }
}
