import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';


//import { DirectivesComponent } from '../directives/directives.component';
// import { ProductsComponent } from '../products/products.component';
// import { UsersComponent } from '../users/users.component';
//import { MyModalComponent } from '../my-modal/my-modal.component';
// import { Demo1Component } from '../demo1/demo1.component';

import { EmployeeComponent } from '../../employee/employee.component';



@Component({
  selector: 'app-body',
  imports: [ EmployeeComponent, FormsModule  //DirectivesComponent,UsersComponent,ProductsComponent, Demo1Component, MyModalComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {

}