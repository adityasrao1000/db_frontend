import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomerInfoComponent } from './customer-info.component' 
import { CustomerInfoRoutingModule } from './customer-info-routes.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';
import { NgTabComponent } from './NgTab.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    CustomerInfoComponent,
    NgTabComponent
  ],
  imports: [
    NgbModule.forRoot(),
    CommonModule,
    SharedModule,
    CustomerInfoRoutingModule
  ],
  providers: [
   
  ]
})
export class CustomerInfoModule { }
