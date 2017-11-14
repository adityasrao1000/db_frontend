import {Component} from '@angular/core';
import {NgbTabChangeEvent} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tab',
  templateUrl: './NgTab.component.html'
})
export class NgTabComponent {
    public beforeChange($event: NgbTabChangeEvent) {
      if ($event.nextId === 'tab-preventchange2') {
        $event.preventDefault();
      }
    };
   
}
