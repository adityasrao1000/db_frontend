import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { ActivateGuard } from './login/activate-guard.service';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [ActivateGuard] },
  { path: 'home', component: HomeComponent, canActivate: [ActivateGuard] },
  { path: 'login', component: LoginComponent }

];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);
