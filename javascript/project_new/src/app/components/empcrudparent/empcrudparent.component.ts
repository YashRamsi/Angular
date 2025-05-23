import { Component } from '@angular/core';
import { Empformchild2Component } from '../empformchild2/empformchild2.component';
import { Emptablechild1Component } from '../emptablechild1/emptablechild1.component';

@Component({
  selector: 'app-empcrudparent',
  imports: [Emptablechild1Component, Empformchild2Component],
  templateUrl: './empcrudparent.component.html',
  styleUrl: './empcrudparent.component.css'
})
export class EmpcrudparentComponent {

  employees = [
    { eId: 101, name: 'Sanjay', sal: 5000, gender: 'Male' },
    { eId: 104, name: 'Geeta', sal: 8000, gender: 'Female' },
    { eId: 103, name: 'Sameer', sal: 7000, gender: 'Male' },
    { eId: 102, name: 'Sita', sal: 9000, gender: 'Female' },
    { eId: 105, name: 'Deepak', sal: 8000, gender: 'Male' }
  ];

  // Delete event handler from child1
  deleteEventFromChild(index: number) {
    this.employees.splice(index, 1);
  }

  // Add event handler from child2
  addEventFromChild(newEmp: any) {
    this.employees.push(newEmp);
  }
}
