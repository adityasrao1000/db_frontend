import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { host } from '../host-conf'

@Injectable()
export class SessionCheckService {

  constructor(private http: Http) { }
  validate() {
 
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const body = `username=aditya&password=rao`;
    return this.http
      .post(`${host}/SessionValidate`, body, {
            headers: headers 
          })
      .toPromise()
      .then(res => res.json())
      .catch(err => alert('error'));
  }
  }

