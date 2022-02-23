import { Component, OnInit } from '@angular/core';
import { ModeloEmpleado } from 'src/app/interface/modelo';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  servListaEmpleados:ModeloEmpleado[]=[];


   constructor(private servicioEmpleado:ServiceService) { }

  ngOnInit(): void {
    this.servListaEmpleados = this.servicioEmpleado.getEmpleado();
     
  }
}
 