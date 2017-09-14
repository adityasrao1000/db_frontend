import { Component, OnInit } from '@angular/core';
import { LoginValidateService } from './login-validate.service';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username: string = '';
  password: string = '';
  
  constructor(private validation: LoginValidateService, private router: Router) { }
  
  ngOnInit() {
  }
   onSubmit() {
      this.validation.validateUser(this.username.trim(), this.password.trim())
       .then(result => {        
            if (result.status === 'true') {
              this.router.navigate(['/home']);
            }
       });
  }
}
