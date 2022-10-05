import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-add-edit-empleado',
  templateUrl: './add-edit-empleado.component.html',
  styleUrls: ['./add-edit-empleado.component.css'],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' }
  }]
})
export class AddEditEmpleadoComponent implements OnInit {

  form: FormGroup;
  accion: string = 'Agregar';
  idEmpleado: number;

  constructor(private fb: FormBuilder, 
    private empleadoService: EmpleadoService, 
    private router: Router,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      fechaIngreso: ['', Validators.required],
      estadoCivil: ['', Validators.required],
      sexo: ['', Validators.required]
    })

    this.idEmpleado = this.route.snapshot.params['id'];
  }
  
  ngOnInit(): void {
    if (this.idEmpleado != undefined) {
      this.accion = 'Editar';
      this.getEmpleado();
    }
  }

  getEmpleado() {
    const empleado: Empleado = this.empleadoService.getEmpleado(this.idEmpleado);

    if (empleado) {
      this.form.setValue({
        nombre: empleado.nombre,
        correo: empleado.correo,
        telefono: empleado.telefono,
        fechaIngreso: empleado.fechaIngreso,
        estadoCivil: empleado.estadoCivil,
        sexo: empleado.sexo
      })
    }
  }

  guardarEmpleado() {
    if (!this.idEmpleado) { // registra un nuevo empleado
      this.empleadoService.agregarEmpleado(this.form.value);
      this.snackBar.open('El empleado fue registrado con exito.', '', { duration: 3000 });
      this.router.navigateByUrl('/'); // navega a la pagina de inicio
    } else { // actualiza un empleado
      this.empleadoService.editarEmpleado(this.idEmpleado, this.form.value);
      this.snackBar.open('El empleado fue registrado con exito.', '', { duration: 3000 });
      this.router.navigateByUrl('/'); // navega a la pagina de inicio
    }
  }

  editarEmpleado() {

  }


}
