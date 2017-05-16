import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Student}  from '../student';
import {Employee} from '../employee';
import {Pasta} from './pasta';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
})
export class ZippyComponent {
  @Input() student : Student;
  @Output() updateEmployee = new EventEmitter<Employee>();
  employee = new Employee();

  update() {
    this.employee.fname = this.student.fname;
    this.employee.lname = this.student.lname;

    this.updateEmployee.emit(this.employee);
  }

  pastas = [
    { id: 1, name: 'peperon'},
    { id: 2, name: 'carbonara'},
    { id: 3, name: 'seefood'},
  ];

  pizzas = [
    { id: 1, name: 'margerita'},
    { id: 2, name: 'seefood'},
    { id: 3, name: 'choco'},
    { id: 4, name: 'banana'},
  ];
  pizzas2 = [
    { id: 5, name: 'pescatole'},
    { id: 6, name: 'karasumi'},
    { id: 7, name: 'sarami'},
    { id: 8, name: 'spinachi'},
  ];

  @Input() selectedPasta: Pasta;
  @Output() updatePasta = new EventEmitter<Pasta>();
  current_pasta = new Pasta();

  pastaChanged(pasta_id) {
    console.log(pasta_id);
    // this.current_pasta.id = 2;
    // this.current_pasta.name = 'foobar';
    // this.updatePasta.emit(this.current_pasta);

  }

  pizzaChanged(pizza) {
    console.log(pizza);
  }
}
