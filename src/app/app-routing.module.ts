import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PacienteListaComponent } from './paciente-lista/paciente-lista.component';
import { PacienteComponent } from './paciente/paciente.component';


const routes: Routes = [
  {path:"", component: PacienteListaComponent},
  {path:"pacientes", component: PacienteListaComponent},
  {path:"paciente/:id", component: PacienteComponent},
  {path:"paciente", component: PacienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
