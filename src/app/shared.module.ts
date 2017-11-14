import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { LogoutService } from './navbar/logout.service';

@NgModule({
  imports:      [ CommonModule, RouterModule ],
  declarations: [ NavbarComponent ],
  providers:    [ LogoutService ],
  exports:      [ NavbarComponent ]
})
export class SharedModule { }
