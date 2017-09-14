import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export  class ActivateGuard implements CanActivate {

  private can: boolean = false;
  constructor(private router: Router) { }
  canActivate() {
    console.log('ActivateGuard#canActivate called, can: ', this.can);
    if (!this.can) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }

  setCanActivate(can) {
    this.can = can;
  }
}
