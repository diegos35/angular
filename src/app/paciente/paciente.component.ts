import { Component, OnInit,Input } from '@angular/core';
import { Paciente } from '../paciente';
import {PacienteService}from '../services/paciente.service';
import { NgModel } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

//import {HttpClient}from '@angular/common/http';


@Component({
  selector: 'paciente-view',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

pacientes:Paciente = new Paciente;


  @Input() paciente:Paciente;
//capturar id 
 id:any;
  constructor(private pacienteService: PacienteService,private activatedroute: ActivatedRoute ) {
    this.id= activatedroute.snapshot.params['id']; //este es id es el de la ruta paciente/id
    console.log(this.id);
  }
  
  ngOnInit() { } 
  
guardar(){
  return this.pacienteService.save(this.pacientes).subscribe(res=>{ 
    alert('pelicula guardada');this.pacientes = res});

}
}