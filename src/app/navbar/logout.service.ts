import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { host } from '../host-conf';

@Injectable()
export class LogoutService {
  
  constructor(private http: Http) { }
  
  logout() {
    
      return this.http.get(`${host}/Logout`, {})
      .toPromise()
      .then(res => res.json())
      .catch(err => alert('error'));
  
  }
  

}
