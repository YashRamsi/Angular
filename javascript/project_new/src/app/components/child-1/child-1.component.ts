import { Component } from '@angular/core';

@Component({
  selector: 'app-child-1',
  imports: [],
  templateUrl: './child-1.component.html',
  styleUrl: './child-1.component.css',
  inputs: ['a']
})
export class Child1Component {
  a: any;
  userName: string = 'Sanjay Samantra';
}
