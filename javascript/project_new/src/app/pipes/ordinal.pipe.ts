import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {

  transform(value: number): string {
    if (!value && value !== 0) return '';

    let suffixes = ['th', 'st', 'nd', 'rd'];
    let v = value % 100;
    let suffix = (v >= 11 && v <= 13) ? 'th' : suffixes[(v % 10)] || 'th';

    return value + suffix;
  }

}
