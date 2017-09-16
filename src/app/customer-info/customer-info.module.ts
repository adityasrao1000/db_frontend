import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomerInfoComponent } from './customer-info.component' 
import { CustomerInfoRoutingModule } from './customer-info-routes.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    CustomerInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CustomerInfoRoutingModule
  ],
  providers: [
   
  ]
})
export class CustomerInfoModule { }
