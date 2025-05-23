import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../pipes/remaining.pipe';
import { MySortPipe } from '../../pipes/my-sort.pipe';
import { OrdinalPipe } from '../../pipes/ordinal.pipe';
import { AgePipe } from '../../pipes/age.pipe';
import { SalutationPipe } from '../../pipes/salutation.pipe';
import { EmpfilterPipe } from '../../pipes/empfilter.pipe';
import { RomanPipe } from '../../pipes/roman.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RemainingPipe,
    MySortPipe,
    OrdinalPipe,
    RomanPipe,
    AgePipe,
    SalutationPipe,
    EmpfilterPipe
  ],
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']  // note: it should be 'styleUrls', not 'styleUrl'
})
export class PipesComponent {
  userName: string = 'Sachin tEnDuLKaR';
  salary: number = 5000;
  today: Date = new Date();
  user: object = { name: 'sanjay', age: 40, add: 'bangalore' };
  numArr: number[] = [10, 20, 30, 40, 50, 60, 70, 80];

  msg: string = '';
  msg2: string = '';

  arr = [10, 50, 30, 40, 20]
  arr2 = [10, 50, 30, 40, 20]

  num: number = 21;

  num1: number = 1;


  birthDate: string = '';

  employees = [
    { eId: 101, name: 'Sanjay', sal: 5000, gender: 'Male' },
    { eId: 104, name: 'Geeta', sal: 8000, gender: 'Female' },
    { eId: 103, name: 'Sameer', sal: 7000, gender: 'Male' },
    { eId: 102, name: 'Sita', sal: 9000, gender: 'Female' },
    { eId: 105, name: 'Deepak', sal: 8000, gender: 'Male' }
  ];

  searchText: string = '';
  
}