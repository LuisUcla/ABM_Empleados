import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './components/navbar/navbar.component';
import { MensajeConfirmacionComponent } from './components/share/mensaje-confirmacion/mensaje-confirmacion.component';
import { AngularMaterialModule } from './components/angular-material.module';
import { ComponentsRoutesModule } from './pages/components-routes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AngularMaterialModule, // <----- componentes de angular material
    ComponentsRoutesModule // <----- vistas o modulos principales
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
