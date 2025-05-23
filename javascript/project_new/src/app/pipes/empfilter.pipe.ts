import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeFilter'
})
export class EmpfilterPipe implements PipeTransform {

  transform(employees: any[], searchText: string): any[] {
    if (!employees || !searchText) return employees;
    return employees.filter(emp =>
      emp.name.toLowerCase().includes(searchText.toLowerCase()) ||
      emp.gender.toLowerCase().includes(searchText.toLowerCase()) ||
      emp.eId.toString().includes(searchText)
    );
  }

}
