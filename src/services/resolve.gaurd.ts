import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { of } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
    providedIn:'root'
})
export class ResolveGuard implements Resolve<any>{
    

    constructor( private httpClient:HttpClient, private activatedRouter:ActivatedRoute){
        console.log("ResolveGuard");
     
    }
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let userId = null;
        let data$ = this.httpClient.get('https://uat-api.taxbuddy.com/txbdy_ms_user/profile/'+ route.params['userId']).pipe(
            catchError((error) => {
                if(error instanceof HttpErrorResponse){
                    console.log(error)
                }else{
                    console.log(error)
                }
               return of('No data');
            })
         ); 
        return data$;
    }
    
}