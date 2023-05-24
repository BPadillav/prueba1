import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Contacto } from 'src/app/domain/contacto';
import { ContactoService } from 'src/app/services/contacto.service';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})

export class ListarComponent {


  listadoContactos: Contacto [] = []

  constructor(private contactoService : ContactoService, 
    private router: Router){
    this.listadoContactos = contactoService.getList()
    console.log('listadoContactos', this.listadoContactos)

  }

  editar(contacto: Contacto){
    console.log(contacto)
    let params: NavigationExtras = {
        queryParams: {
          contacto: contacto,
          nombre: 'Lisseth'
        }
    }

       const inputNombre = document.getElementById('nombre') as HTMLInputElement;
       const inputDuracion = document.getElementById('duracion') as HTMLInputElement;
       const inputTitulo = document.getElementById('titulo') as HTMLInputElement;
       const inputModalidad = document.getElementById('modalidad') as HTMLInputElement;
     
       if (inputNombre && inputDuracion && inputTitulo && inputModalidad) {
         inputNombre.value = contacto.nombre;
         inputDuracion.value = contacto.duracion;
         inputTitulo.value = contacto.titulo;
         inputModalidad.value = contacto.modalidad;;
         contacto.nombre=inputNombre.value;
         contacto.duracion = inputDuracion.value;
         contacto.titulo = inputTitulo.value;
         contacto.modalidad = inputModalidad.value;  
       }
}

eliminar(contacto: Contacto) {
  for(let i = 0 ; i < this.listadoContactos.length ; i++){
    if(this.listadoContactos[i] === contacto){
      console.log("son iguales");
      this.listadoContactos.splice(i,1);
    }
  }
}
nuevo() {
  this.router.navigate(['pages/crear']);
}
}