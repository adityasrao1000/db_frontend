import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { host } from '../host-conf'

@Injectable()
export class SessionCheckService {

  constructor(private http: Http) { }
  validate() {
 
    return this.http.get(`${host}/SessionValidate`)
      .map(response => response.json());
  }
}
