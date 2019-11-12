import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class UIStatusService{
    
    private app_behaviour$:Observable<any>;
    private  user_data :Observable<any>;

    constructor(){
        this.app_behaviour$ = Observable.create(observer=> this.setAppBehaviour(observer) )
    }
    
    getAppBehaviour(){
         this.app_behaviour$.subscribe(user_data=>{
            console.log(user_data);
         })
    };

    setAppBehaviour(observer:Observer<any>){
        observer.next(JSON.parse(sessionStorage.getItem('user_data')) );
    };

}