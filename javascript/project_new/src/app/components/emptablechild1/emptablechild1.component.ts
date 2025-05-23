import { Component, EventEmitter } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { EMPLOYEE_MESSAGES } from '../../constants';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';

@Component({
  selector: 'app-emptablechild1',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './emptablechild1.component.html',
  styleUrls: ['./emptablechild1.component.css'],
  inputs: ['employeeListFromParent'],
  outputs: ['deleteEventToParent']
})
export class Emptablechild1Component {
  faTrash = faTrash;

  employeeListFromParent = [
    { eId: 0, name: '', sal: 0, gender: '' }
  ];

  deleteEventToParent = new EventEmitter<number>();

  deleteEmployee(index: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: EMPLOYEE_MESSAGES.CONFIRM_DELETE,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete',
      cancelButtonText: 'Cancel'
    }).then(result => {
      if (result.isConfirmed) {
        this.deleteEventToParent.emit(index);  // Child to parent--> Emitter
        new Snackbar(EMPLOYEE_MESSAGES.DELETED_SUCCESS, {
          position: 'top-center',
          theme: 'light',
          timeout: 3000
        });
      }
    });
  }
}