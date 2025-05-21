import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash, faPlus, faEdit, faEye } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';
import { EMPLOYEE_MESSAGES } from '../constants'; 


@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule, FontAwesomeModule],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  faTrash = faTrash;
  faPlus = faPlus;
  faEdit = faEdit;
  faEye = faEye;

  employees = [
    { eId: 101, name: 'Sanjay', sal: 5000, gender: 'Male' },
    { eId: 104, name: 'Geeta', sal: 8000, gender: 'Female' },
    { eId: 103, name: 'Sameer', sal: 7000, gender: 'Male' },
    { eId: 102, name: 'Sita', sal: 9000, gender: 'Female' },
    { eId: 105, name: 'Deepak', sal: 8000, gender: 'Male' }
  ];

  newEmp: { eId: number; name: string; sal: number; gender: string } = {
    eId: 0,
    name: '',
    sal: 0,
    gender: ''
  };
  
  selectedEmp: any = null;

  deleteEmployee(index: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to delete this employee',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete',
      cancelButtonText: 'Cancel'
    }).then(result => {
      if (result.isConfirmed) {
        this.employees.splice(index, 1);
        new Snackbar('Employee Deleted Successfully', {
          position: 'top-center',
          theme: 'light',
          timeout: 3000
        });
      }
    });
  }

  addEmployee() {
    if (
      !this.newEmp.eId || this.newEmp.eId <= 0 ||
      !this.newEmp.sal || this.newEmp.sal <= 0 ||
      !this.newEmp.name.trim() ||
      !this.newEmp.gender
    ) {
      Swal.fire('Invalid Input', 'Please fill all fields with valid values.', 'warning');
      return;
    }
  
    this.employees.push({ ...this.newEmp });
  
    new Snackbar('Employee Added Successfully', {
      position: 'top-center',
      theme: 'light',
      timeout: 3000
    });
  
    this.newEmp = { eId: 0, name: '', sal: 0, gender: '' };
  }
  
  // Create Modal To view detail of employee
  viewEmployee = (emp: any) => this.selectedEmp = emp;
  
   // Edit employee
    editEmployee = (emp: any) => {
      Swal.fire({
        title: "HOWDY ROWDY!",
        text: "WORK IN PROGRESS",
        imageUrl: "https://media.istockphoto.com/id/1179752194/vector/update-system-icon-concept-of-upgrade-application-progress-icon-for-graphic-and-web-design.jpg?s=612x612&w=0&k=20&c=Bbk_qB4Nf4VimE0lJaTwvLV0GaBIBkPrtEVTpF5_bQE=",
        imageWidth: 200,
        imageHeight: 200,
      });
    }
  
}