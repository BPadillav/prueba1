import { Injectable } from '@angular/core';
import { Contacto } from '../domain/contacto';
import { CrearComponent } from '../pages/crear/crear.component';

@Injectable({
  providedIn: 'root'
})

export class ContactoService {

  contactos: Contacto[] = [];
  comp: any;
  //constructor() { }

  setComponet(comp: CrearComponent){
    this.comp = comp
  }

  updateContacto(contacto: Contacto){
    this.comp.contacto = contacto
  }

  save(contacto: Contacto){
    this.contactos.push({ ...contacto });
    console.log(this.contactos);
    
   /* this.contactos.push(contacto)
    console.log(this.contactos)*/
  }

  getList(){
    return this.contactos;
  }
// enlazar el formulario
}