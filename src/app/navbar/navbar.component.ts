import { Component, OnInit } from '@angular/core';
import { ActivateGuard } from '../login/activate-guard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private activatedguard: ActivateGuard, private router: Router) { }
  logout(): void {
    this.activatedguard.setCanActivate(false)
    this.router.navigate(['/login']);
  }
  ngOnInit() {
  }

}
