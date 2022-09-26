import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleado } from 'src/app/models/empleado';
import { MatDialog } from '@angular/material/dialog';
import { MensajeConfirmacionComponent } from 'src/app/components/share/mensaje-confirmacion/mensaje-confirmacion.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css']
})
export class ListEmpleadoComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'correo', 'estadoCivil', 'fechaingreso', 'sexo', 'telefono', 'Acciones'];
  dataSource: any;
  listEmpleados: Empleado[] = [];
 
  @ViewChild(MatSort, { static: true }) sort: any; // para ordenar haciendo click en cada columna
  @ViewChild(MatPaginator, { static: true }) paginator: any; // para hacer la paginacion que esta ubicada a la derecha parte baja

  constructor(private empleadoService: EmpleadoService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.getEmpleados();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getEmpleados() {
    this.listEmpleados = this.empleadoService.getEmpleados();
    console.log(this.listEmpleados);
    this.dataSource = new MatTableDataSource<Empleado>(this.listEmpleados);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  eliminarEmpleado(i: number) {
    // lanza el popover
    const dialogRef = this.dialog.open(MensajeConfirmacionComponent, {
      width: '350px',
      data: { mensaje: 'Esta seguro que desea eliminar el empleado?' }
    });

    // recibe el evento o los datos que vienen del popover o componente hijo
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result == 'aceptar') {
        this.empleadoService.eliminarEmpleado(i); // elimina el emplado de la lista
        this.getEmpleados(); // hace una recarga de la lista de empleados
        this.snackBar.open(
          'El empleado fue eliminado con exito', '', { duration: 30000 }
        )
      } 
    });
  }

}
