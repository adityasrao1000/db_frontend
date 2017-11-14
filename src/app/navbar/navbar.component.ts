import { Component, OnInit } from '@angular/core';
import { ActivateGuard } from '../login/activate-guard.service';
import { Router } from '@angular/router';
import { LogoutService } from './logout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  value: string = 'none'
  
  constructor(private activatedguard: ActivateGuard, private router: Router, private logoutService: LogoutService) { }
  logout(): void {
    this.logoutService.logout()
      .then(result => alert(result.status));
    
    this.activatedguard.setCanActivate(false)
    this.router.navigate(['/login']);
  }
  
  slidebar(): void {
    if (this.value === 'none') {
      this.value = 'block';
    }else {
      this.value = 'none';
    }
  }
  
  ngOnInit() {
  }

}
