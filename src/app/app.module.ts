import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorreoComponent } from './correo/correo.component';
import { ListaCorreosComponent } from './lista-correos/lista-correos.component';
import { NuevoCorreoComponent } from './nuevo-correo/nuevo-correo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AvisosComponent } from './avisos/avisos.component';
import { CorreosRecibidosComponent } from './correos-recibidos/correos-recibidos.component';

@NgModule({
  declarations: [
    AppComponent,
    CorreoComponent,
    ListaCorreosComponent,
    NuevoCorreoComponent,
    AvisosComponent,
    CorreosRecibidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
