import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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

  constructor(private fb: FormBuilder, 
    private empleadoService: EmpleadoService, 
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      nombre: [''],
      correo: [''],
      telefono: [''],
      fechaIngreso: [''],
      estadoCivil: [''],
      sexo: ['']
    })
  }
  
  ngOnInit(): void {
  }

  guardarEmpleado() {
    this.empleadoService.agregarEmpleado(this.form.value);
    this.snackBar.open('El empleado fue registrado con exito.', '', { duration: 30000 });
    this.router.navigateByUrl('/'); // navega a la pagina de inicio
  }  

}
