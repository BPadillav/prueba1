import { Component } from '@angular/core';
import { ContactoService } from './services/contacto.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Practica';

  constructor(private contactoService: ContactoService) { 
  }
}
