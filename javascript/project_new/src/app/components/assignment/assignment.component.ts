import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-assignment',
  imports: [FormsModule],
  templateUrl: './assignment.component.html',
  styleUrl: './assignment.component.css'
})
export class AssignmentComponent {
  showText: boolean = true;  // Question 1: Initialize a boolean variable to control the visibility of the text
  //------------------------// Question 2: To display the remaining characters available to type
      message = '';         // user input text
      remaining = 100;     // temp var to calculate characters

  //----------------------// Question 3: To display the current state of the dropdown
  State = '';
  //---------------------// Question 4: To calculate the result of a simple arthimetic operation
  num1 = 0;
  num2 = 0;
  result = 0;
  operator = '+';

  calculate() {
    if (this.operator === '+') {
      this.result = this.num1 + this.num2;
    } else if (this.operator === '-') {
      this.result = this.num1 - this.num2;
    } else if (this.operator === '*') {
      this.result = this.num1 * this.num2;
    } else if (this.operator === '/') {
      this.result = this.num2 !== 0 ? this.num1 / this.num2 : 0;
    }
  }
  //---------------------// Question 5: Toggle for password visibility
  inputType = 'password';
  toggleVisibility() {
    this.inputType = this.inputType === 'password' ? 'text' : 'password';
  }
  //----------------------// Question 6: Counter to increment, decrement and reset the value
    count = 0;
    increment() {
      this.count++;
    }
    decrement() {
      this.count--;
    }
    reset() {
      this.count = 0;
    }
  //----------------------// Question 7: Toggle button to control Dark/Light theme of a page.
  isDarkMode = false;
}


