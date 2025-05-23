import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Snackbar from 'awesome-snackbar';
import Swal from 'sweetalert2';
import { EMPLOYEE_MESSAGES } from '../../constants';

@Component({
  selector: 'app-empformchild2',
  standalone: true,
  imports: [FormsModule, FontAwesomeModule],
  templateUrl: './empformchild2.component.html',
  styleUrls: ['./empformchild2.component.css'],
  outputs: ['addEventToParent']
})
export class Empformchild2Component {
  faPlus = faPlus;

  newEmp = { eId: 0, name: '', sal: 0, gender: '' };

  addEventToParent = new EventEmitter<any>();

  addEmployeeToParent() {
    if (
      !this.newEmp.eId || this.newEmp.eId <= 0 ||
      !this.newEmp.sal || this.newEmp.sal <= 0 ||
      !this.newEmp.name.trim() || !this.newEmp.gender
    ) {
      Swal.fire('Invalid Input', 'Please fill all fields with valid values.', 'warning');
      return;
    }

    this.addEventToParent.emit({ ...this.newEmp });

    new Snackbar(EMPLOYEE_MESSAGES.ADDED_SUCCESS, {
      position: 'top-center',
      theme: 'light',
      timeout: 3000
    });

    this.newEmp = { eId: 0, name: '', sal: 0, gender: '' };
  }
}