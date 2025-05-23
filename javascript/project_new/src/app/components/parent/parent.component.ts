import { Component } from '@angular/core';
import { Child1Component } from '../child-1/child-1.component';
import { Child2Component } from '../child-2/child-2.component';

@Component({
  selector: 'app-parent',
  imports: [Child1Component, Child2Component],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  a = 10;

  address_parent: string = '';

  receiveDataFromChild(addressDataFromChild: string) {
    this.address_parent = addressDataFromChild;
  }
}
