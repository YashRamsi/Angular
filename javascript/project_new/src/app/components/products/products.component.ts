import { NgxPaginationModule } from 'ngx-pagination';
import { Component } from '@angular/core';
import productData from './products_data';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

//import { faStar } from '@fortawesome/free-solid-svg-icons';
 


@Component({
  selector: 'app-products',
  imports: [
    NgxPaginationModule, FormsModule, FontAwesomeModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productsArr = productData;
  p: number = 1;

  searchTerm = '';
  sortOrder = '';

  // Searching
  searchProducts = () => {
    const term = this.searchTerm.toLowerCase();
    this.productsArr = productData.filter(product =>
      product.title.toLowerCase().includes(term)
    );
  };

  // Sorting
  sortProducts = (order: string) => {
    this.sortOrder = order;
    this.productsArr.sort((a, b) =>
      order === 'asc' ? a.price - b.price : b.price - a.price
    );
  };

  faStar = faStar;
}