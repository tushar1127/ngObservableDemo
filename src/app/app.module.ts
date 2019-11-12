import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxScrollToFirstInvalidModule } from '@ismaestro/ngx-scroll-to-first-invalid';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralDetailsComponent } from './general-details/general-details.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { UIStatusService } from './services/UIStatusService';
import { ArithmaticComponent } from './arithmatic/arithmatic.component';
import { ArithmaticService } from './services/Arithmatic.service';
import { SequencialHttpCallComponent } from './sequencial-http-call/sequencial-http-call.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthorizationInterceptor } from 'src/services/auth.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { AppInitService } from 'src/services/app.init';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { RandomInputControlComponent } from './random-input-control/random-input-control.component';
import { ColorDirective } from './color.directive';

export function initializeApp1(appInitService: AppInitService) {
  return (): Promise<any> => {
    return appInitService.Init();
  }
}
@NgModule({
  declarations: [
    AppComponent,
    GeneralDetailsComponent,
    NestedFormComponent,
    ArithmaticComponent,
    SequencialHttpCallComponent,
    ProfileComponentComponent,
    RandomInputControlComponent,
    ColorDirective
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    NgxScrollToFirstInvalidModule,
    ToastrModule.forRoot()
  ],
  providers: [
    UIStatusService,
    ArithmaticService,
    { provide: APP_INITIALIZER, useFactory: initializeApp1, deps: [AppInitService], multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
