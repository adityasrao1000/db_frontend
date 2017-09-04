import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { host } from './host-conf'

@Injectable()
export class CustomerUpdateService {

  constructor(private http: Http) { }
  
editCustomer(id: string, first: string, last: string) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const body = `id=${id}&first=${first}&last=${last}`;
    return this.http
      .post(`${host}/EditUser`, body, {
            headers: headers 
          })
      .toPromise()
      .then(res => res.json())
      .catch(err => alert('error'));
  }
  
}
