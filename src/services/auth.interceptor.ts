import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
@Injectable({
    providedIn:'root'
})
export class AuthorizationInterceptor implements HttpInterceptor {    
    constructor(private toasterService:ToastrService){}
    
    intercept(request: HttpRequest<any>, next: HttpHandler){
        console.log("Intercepting http request " + request.url);

        if (!window.navigator.onLine) {
            return Observable.throw(new HttpErrorResponse({ error: 'Internet is required.' }));
        } 

        if(!sessionStorage.getItem('authorizationToken')){
            console.log("NO TOKEN -->")
        }
        request = request.clone({ headers: request.headers.set('content-type', 'application/json')});
        request = request.clone({ headers: request.headers.set('Authorization', 'Bearer '+ sessionStorage.getItem('authorizationToken')) });
        return next.handle(request)
            .pipe(
                tap(evt => {
                    console.log("http success",evt);
                    if (evt instanceof HttpResponse) {
                        if(evt.body){
                        //   this.toasterService.success("Get successfully");
                        }
                    }
                }),
                catchError( (response: any) => {
                    if(response instanceof HttpErrorResponse) {
                        try {
                            this.toasterService.error(response.error.message, response.error.title);
                        } catch(e) {
                            this.toasterService.error('An error occurred', '');
                        }
                        //log error 
                    }
                    return of(response);
                })
                );
      }
}