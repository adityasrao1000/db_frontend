import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { host } from './host-conf'
@Injectable()
export class CustomerDetailsService {

  constructor(private http: Http) {}
  
  search() {

    return this.http.get(`${host}/UserDetails`)
      .map(response => response.json());
  }

}
