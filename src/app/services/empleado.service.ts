import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  listEmpleados: Empleado[] = [
    {
      nombre: "Luis",
      correo: 'luis@gmail.com',
      estadoCivil: "Soltero",
      telefono: "+58 412 5615779",
      fechaIngreso: new Date('2022-01-25'),
      sexo: 'Masculino'
    },
    {
      nombre: "Maria",
      correo: 'maria@gmail.com',
      estadoCivil: "Soltero",
      telefono: "+58 412 4548666",
      fechaIngreso: new Date('2022-01-26'),
      sexo: 'Femenino'
    },
    {
      nombre: "Juan",
      correo: 'juan@gmail.com',
      estadoCivil: "Casado",
      telefono: "+58 416 5894215",
      fechaIngreso: new Date('2022-02-04'),
      sexo: 'Masculino'
    },
    {
      nombre: "Adriana",
      correo: 'adriana@gmail.com',
      estadoCivil: "Soltero",
      telefono: "+58 412 8544123",
      fechaIngreso: new Date('2022-03-23'),
      sexo: 'Femenino'
    },
    {
      nombre: "Emilia",
      correo: 'emilia@gmail.com',
      estadoCivil: "Soltero",
      telefono: "+58 424 5841235",
      fechaIngreso: new Date('2022-08-25'),
      sexo: 'Femenino'
    },
    {
      nombre: "Carlos",
      correo: 'carlos@gmail.com',
      estadoCivil: "Casado (Lo siento Carlos)",
      telefono: "+58 424 5217564",
      fechaIngreso: new Date('2022-09-17'),
      sexo: 'Femenino'
    }
  ];

  constructor() { }


  getEmpleados() {
    return this.listEmpleados.slice();
  }

  eliminarEmpleado(i: number) {
    this.listEmpleados.splice(i, 1);
  }

  agregarEmpleado(empleado: Empleado) {
    this.listEmpleados.unshift(empleado);
  }
}
