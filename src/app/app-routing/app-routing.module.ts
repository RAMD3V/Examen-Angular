import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../componentes/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from '../componentes/lista/lista.component';



const routes : Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'lista',
    component:ListaComponent
  },

  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)  ],
  exports : [RouterModule]
  
})
export class AppRoutingModule { }
