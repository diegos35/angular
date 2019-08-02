import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PacienteComponent } from './paciente/paciente.component';
import { PacienteListaComponent } from './paciente-lista/paciente-lista.component';
import { MatCardModule, MatPaginatorModule,
   MatTableModule,MatToolbarModule,MatInputModule
   ,MatButtonModule,    MatSortModule,MatDatepickerModule} from 
   '@angular/material';
   import {MatIconModule} from '@angular/material/icon';

import { FormsModule } from '@angular/forms';

//Registro de todos los componentes
@NgModule({
  declarations: [
    AppComponent,
    PacienteComponent,
    PacienteListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule, 
       MatPaginatorModule,
           MatSortModule,
           FormsModule,
           MatDatepickerModule,
           MatIconModule


    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
