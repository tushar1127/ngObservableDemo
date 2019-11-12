import { Injectable }  from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class AppInitService {
 
    constructor() { }
    
    Init() {
         return new Promise<void>((resolve, reject) => {
             console.log("AppInitService.init() called");
             //do your initialisation stuff here  
             console.log("checking session stroage");
                if(sessionStorage.getItem('authorizationToken')){
                    resolve();
                }else{
                    alert('Please login')
                    resolve();
                }
               
         });
    }
}