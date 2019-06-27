import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HardcodedAuthenticationService } from './services/hardcoded-authentication.service';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { WelcomeDataService } from './services/data/welcome-data.service';
import { TodoComponent } from './todo/todo.component';
import { HttpIntercepterBasicAuthService } from './services/http/http-intercepter-basic-auth.service';
import { BasicedAuthenticationService } from './services/basic-authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HardcodedAuthenticationService,WelcomeDataService,BasicedAuthenticationService,{provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
