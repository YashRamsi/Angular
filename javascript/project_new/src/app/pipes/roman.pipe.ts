import { Pipe, PipeTransform } from '@angular/core';
import Swal from 'sweetalert2';

@Pipe({
  name: 'roman'
})
export class RomanPipe implements PipeTransform {

  transform(value: number): string {
    if (!value || value <= 0) {
      Swal.fire('Invalid Input', 'Please enter number greater than 0', 'error');
      return '';
    }

    const romanNumerals = [
      { val: 1000, symbol: 'M' },
      { val: 900, symbol: 'CM' },
      { val: 500, symbol: 'D' },
      { val: 400, symbol: 'CD' },
      { val: 100, symbol: 'C' },
      { val: 90, symbol: 'XC' },
      { val: 50, symbol: 'L' },
      { val: 40, symbol: 'XL' },
      { val: 10, symbol: 'X' },
      { val: 9, symbol: 'IX' },
      { val: 5, symbol: 'V' },
      { val: 4, symbol: 'IV' },
      { val: 1, symbol: 'I' },
    ];

    let roman = '';
    for (let item of romanNumerals) {
      while (value >= item.val) {
        roman += item.symbol;
        value -= item.val;
      }
    }

    return roman;
  }

}
