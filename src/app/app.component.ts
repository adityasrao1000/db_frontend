import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { CustomerDetailsService } from './customer-details.service'; 
import { CustomerDeleteService } from './customer-delete.service'; 
import { CustomerEditComponent } from './customer-edit/customer-edit.component'; 
import 'rxjs/Rx';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
export class AppComponent implements OnInit {
  title = 'Customer Details';
  results: User[];
  ok: boolean;
  id: string = '';
  first: string = '';
  last: string = '';
  // Inject HttpClient into your component or service.
  constructor(private http: Http , private cust: CustomerDetailsService, private customerDelete: CustomerDeleteService) {}
 
 getCustomerDetails() {
   this.cust.search()
       .subscribe(result => {
            this.results = result;
       });
 }
 
  
  deleteUser(id: string): void {
     this.ok = confirm('Do you want to delete customer with id: ' + id);
    if (this.ok) {
    this.customerDelete
        .delete(id)
        .then(() => {
          this.getCustomerDetails()
        });
    }
    return;
  }
  
  editUser(id1: string, first1: string, last1: string): void {
    this.id = id1;
    this.first = first1;
    this.last = last1;
    location.href = '#myDiv';
  }
  ngOnInit(): void {
   // Get the customer details
   this.getCustomerDetails()
  }

}
