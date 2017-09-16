import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { ActivateGuard } from './login/activate-guard.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [ActivateGuard] },
  { path: 'home', component: HomeComponent, canActivate: [ActivateGuard] },
  { path: 'customerinfo', loadChildren: './customer-info/customer-info.module#CustomerInfoModule' },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PagenotfoundComponent },

];

export const appRoutingProviders: any[] = [

];

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
