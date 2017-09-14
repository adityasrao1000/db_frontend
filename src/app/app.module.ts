import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CustomerDetailsService } from './customer-details.service'; 
import { CustomerDeleteService } from './customer-delete.service';
import { CustomerEditComponent } from './customer-edit/customer-edit.component'; 
import { CustomerUpdateService } from './customer-update.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { LoginValidateService } from './login/login-validate.service';
import { routing, appRoutingProviders } from './app.routes';
import { ActivateGuard } from './login/activate-guard.service';
import { SessionCheckService } from './login/session-check.service';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerEditComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent     
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing

  ],
  providers: [
    CustomerDetailsService,
    CustomerDeleteService,
    CustomerUpdateService,
    LoginValidateService,
    SessionCheckService,
    ActivateGuard
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
