import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return 'Invalid date';

    const birth = new Date(value);
    const today = new Date();
    const age = today.getFullYear() - birth.getFullYear();

    return `${age} years old`;
  }

}
