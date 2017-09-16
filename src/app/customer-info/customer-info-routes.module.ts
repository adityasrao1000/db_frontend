import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateGuard } from '../login/activate-guard.service';
import { CustomerInfoComponent } from './customer-info.component' 

export const customerInforoutes: Routes = [
  { path: 'customerinfo', component: CustomerInfoComponent, canActivate: [ActivateGuard] }
 
];

export const customerInfoRoutingProviders: any[] = [

];

export const CustomerInfoRouting = RouterModule.forChild(customerInforoutes);
@NgModule({
  imports: [
    RouterModule.forChild(customerInforoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class CustomerInfoRoutingModule { }
