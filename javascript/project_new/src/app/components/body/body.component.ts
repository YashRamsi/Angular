import { Component, ViewEncapsulation } from '@angular/core';
import { DirectivesComponent } from '../directives/directives.component';
import { ProductsComponent } from '../products/products.component';
import { UsersComponent } from '../users/users.component';
//import { MyModalComponent } from '../my-modal/my-modal.component';


@Component({
  selector: 'app-body',
  imports: [ DirectivesComponent, UsersComponent,ProductsComponent, //MyModalComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {

}