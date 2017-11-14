import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { host } from './host-conf'
@Injectable()
export class CustomerDetailsService {

  constructor(private http: Http) {}
  
  search() {

    const headers = new Headers();
    const body = '';
    return this.http
      .post(`${host}/UserDetails`, body)
      .toPromise()
      .then(res => res.json())
      .catch(err => alert('error'));
  }

}
