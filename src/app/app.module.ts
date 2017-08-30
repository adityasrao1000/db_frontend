import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CustomerDetailsService } from './customer-details.service'; 
import { CustomerDeleteService } from './customer-delete.service';
import { CustomerEditComponent } from './customer-edit/customer-edit.component'; 
import { CustomerUpdateService } from './customer-update.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CustomerEditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule

  ],
  providers: [
    CustomerDetailsService,
    CustomerDeleteService,
    CustomerUpdateService
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
