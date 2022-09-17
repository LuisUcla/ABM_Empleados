import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleado } from 'src/app/models/empleado';


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

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.getEmpleados();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getEmpleados() {
    this.listEmpleados = this.empleadoService.getEmpleados();
    console.log(this.listEmpleados);
    this.dataSource = new MatTableDataSource<Empleado>(this.listEmpleados);
  }

  eliminarEmpleado(i: number) {
    this.empleadoService.eliminarEmpleado(i);
    this.getEmpleados()
  }

}
