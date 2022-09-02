import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './components/navbar/navbar.component';
import { MensajeConfirmacionComponent } from './components/share/mensaje-confirmacion/mensaje-confirmacion.component';
import { AngularMaterialModule } from './components/angular-material.module';
import { ComponentsRoutesModule } from './pages/components-routes.module';
import { ListEmpleadoComponent } from './pages/list-empleado/list-empleado.component';
import { AddEditEmpleadoComponent } from './pages/add-edit-empleado/add-edit-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MensajeConfirmacionComponent,
    //ListEmpleadoComponent,
    //AddEditEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ComponentsRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
