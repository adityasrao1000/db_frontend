import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { host } from '../host-conf'
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
 
@Injectable()
export class LoginValidateService {

  constructor(private http: Http) { }
  
  validateUser(username: string, password: string) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const body = `username=${username}&password=${password}`;
    return this.http
      .post(`${host}/Login`, body, {
            headers: headers 
          })
      .toPromise()
      .then(res => res.json())
      .catch(err => alert('error'));
  }
  
}
