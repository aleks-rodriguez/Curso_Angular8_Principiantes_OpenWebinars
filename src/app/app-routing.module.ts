import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { CorreosRecibidosComponent } from 'src/app/correos-recibidos/correos-recibidos.component';
import { EnviarComponent } from 'src/app/enviar/enviar.component';
import {VisualizarCorreoComponent} from 'src/app/visualizar-correo/visualizar-correo.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'mails', component: CorreosRecibidosComponent },
  { path: 'send', component: EnviarComponent },
  { path: 'mail', component: VisualizarCorreoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
