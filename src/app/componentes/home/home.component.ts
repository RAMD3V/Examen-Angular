import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModeloEmpleado } from 'src/app/interface/modelo';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formulario=this.formularioEmpleado.group({
    nombre:"",
    numero:"",
    edad:"",
    cargo:"",
    rfc:""
  })

empleadoN:ModeloEmpleado[]=[];
  constructor(private formularioEmpleado:FormBuilder, private empleadoServe:ServiceService) { }

  guardarEmp(){
    const empleadoNew : ModeloEmpleado={
      nombre:this.formulario.get("nombre")?.value,
      numero:this.formulario.get("numero")?.value,
      edad:this.formulario.get("edad")?.value,
      cargo:this.formulario.get("cargo")?.value,
      rfc:this.formulario.get("rfc")?.value
    }
    this.empleadoServe.addEmpleado(empleadoNew);
    
   this.empleadoN.push(empleadoNew);
   console.log(empleadoNew);
   this.formulario.reset();
   alert("Empleado Guardado Correctamente");
  }
  ngOnInit(): void {
  }

}
