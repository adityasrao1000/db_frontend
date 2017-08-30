import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { host } from './host-conf'

@Injectable()
export class CustomerDeleteService {

  constructor(private http: Http) { }
  
  delete(id: string): Promise<void> {
    const url = `${host}/DeleteUser?id=${id}`;
    return this.http.get(url)
      .toPromise()
      .then(data => console.log(data.json().state))
      .catch(this.handleError);
  }
  
   private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
   
}
