import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-2',
  imports: [],
  templateUrl: './child-2.component.html',
  styleUrl: './child-2.component.css',
  inputs: ['child2_a', 'child2_userName'],
  outputs:['addressEvent']
})
export class Child2Component {
  child2_a!: number;
  child2_userName!: string;

  userAddress: string = 'Bangalore';

  addressEvent = new EventEmitter();
  sendDataToParent(){
    this.addressEvent.emit(this.userAddress);
  }
}
