import { Injectable } from '@angular/core';
import { Paciente } from '../paciente';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  
  constructor(private http: HttpClient) { }

  

get(){
  return this.http.get<Paciente[]>("http://localhost:8000/api/paciente");
}

save(pacientes:Paciente){
  const headers = new HttpHeaders({'Content-Type':'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Origin': '*'});
  return  this.http.post<Paciente>("http://localhost:8000/api/paciente",(console.log(pacientes)),
  {headers:headers})

}

}
