import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {
  transform(name: string, gender: string): string {
    if (!name || !gender) return name;
    const prefix = gender.toLowerCase() === 'male' ? 'Mr.' : 'Mrs.';
    return `${prefix} ${name}`;
  }
}
