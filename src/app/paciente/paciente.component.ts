import { Component, OnInit, Input } from "@angular/core";
import { Paciente } from "../paciente";
import { PacienteService } from "../services/paciente.service";
import { NgModel } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { PacienteListaComponent } from "../paciente-lista/paciente-lista.component";

//import {HttpClient}from '@angular/common/http';

@Component({
  selector: "paciente-view",
  templateUrl: "./paciente.component.html",
  styleUrls: ["./paciente.component.css"]
})
export class PacienteComponent implements OnInit {
  pacientes: Paciente = new Paciente();

  pa: Paciente = {
    nombre: null,
    apellido: null,
    direccion: null,
    telefono: null,
    fecha_nacimiento: null
  };

  @Input() paciente: Paciente;

  id: any;

  public editar: boolean = false;
  pacientess: Paciente[];

  constructor(
    private pacienteService: PacienteService,
    private activatedroute: ActivatedRoute
  ) {
    this.id = activatedroute.snapshot.params["id"];

    if (this.id) {
      this.editar = true;
      this.pacienteService.getid(this.id).subscribe(res => {
        this.pa = res;
      });
      //console.log(res)

      //this.pa=this.pacientess.find((m)=>
      //{return m.id==this.id});console.log(this.pa) //buscar el m.id enviamos una exprecion lambda
      // }, );
    } else {
      this.editar = false;
    }
  }

  ngOnInit() {}

  guardar() {
    if (this.editar) {
      this.pacienteService.put(this.pa).subscribe(data => {
        alert("pelicula actualizada");
      });
    } else {
      this.pacienteService.save(this.pa).subscribe(data => {
        alert("pelicula guardada");
      });
    }
  }
}
