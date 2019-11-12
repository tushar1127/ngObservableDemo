import { Component } from '@angular/core';
import { UIStatusService } from './services/UIStatusService';
import { Router, NavigationEnd, NavigationStart, ResolveStart, ResolveEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngObservableDemo';
  constructor(
    private uiservice:UIStatusService, 
    private router: Router
    
    ){

     }

  readStatus(){
    this.uiservice.getAppBehaviour();
  console.log("")
  
  
  }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => {
          if(event instanceof NavigationStart){
            console.log(event.url +'navigation start \n')
          }
          
          if(event instanceof ResolveStart ){
            console.log(event.url +'Resolve Start \n')
          }
          if(event instanceof ResolveEnd){
            console.log(event.url +'Resolve End \n')
          }

          if(event instanceof NavigationEnd){
            console.log(event.url +'navigation end \n')
          }
          return true;
      })
      
      )
      .subscribe(() => {
     });
    }

}