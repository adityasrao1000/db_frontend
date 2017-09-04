import { Component,  Input} from '@angular/core';
import { CustomerUpdateService } from '../customer-update.service';
import { HomeComponent } from '../home.component';
@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
  
export class CustomerEditComponent {


  @Input() id: string = '';
  @Input() first: string = '';
  @Input() last: string = '';
  ok: boolean;
  constructor(private custupdate: CustomerUpdateService, private homecomp: HomeComponent) {}
  
  commit() {
    if (this.first.includes('"') || this.last.includes('"')) {
      alert('Illigal characters')
      return;
    }
    this.ok = confirm('Do you want to commit changes?');
    if (this.ok) {
    this.custupdate.editCustomer(this.id, this.first, this.last)
      .then(show => {this.homecomp.getCustomerDetails()});
    }
  }
 

}
