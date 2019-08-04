import { Component, OnInit } from "@angular/core";
import { PacienteService } from "../services/Paciente.Service";

import { Paciente } from "../paciente";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "paciente-lista",
  templateUrl: "./paciente-lista.component.html",
  styleUrls: ["./paciente-lista.component.css"]
})
export class PacienteListaComponent implements OnInit {
  public displayedColumns: string[] = [
    "id",
    "nombre",
    "apellido",
    "direccion",
    "telefono",
    "editar",
    "eliminar"
  ];
  public pacienteSeleccionado: Paciente; //atributo de la clase de tipo "Paciente"
  public pacientes: Paciente[]; //dato paciente de Tipo Paciente

  constructor(private pacienteService: PacienteService) {
    this.pacienteService.get().subscribe(res => {
      this.pacientes = res;
      console.log(res);
    });
  }

  ngOnInit() {}

  delete(id) {
    this.pacienteService.delete(id).subscribe(data => {
      alert("eliminacion con exito ");
    });
  }

  public seleccionaPaciente(paciente: Paciente): void {
    this.pacienteSeleccionado = paciente; // this hace referencia al atributo de la clase y paciente es el
  }
}