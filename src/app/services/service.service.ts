import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModeloEmpleado } from '../interface/modelo';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  servlistaComent:ModeloEmpleado[]=[];

  constructor(private http:HttpClient ) { 
 }
 getEmpleado(){
   return this.servlistaComent;
 }
 addEmpleado(lista:ModeloEmpleado){
   this.servlistaComent.push(lista);
 }
 eliminarEmp(lista:ModeloEmpleado){
  this.servlistaComent.splice(1);
}

}