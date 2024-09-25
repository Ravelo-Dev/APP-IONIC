import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Sumadora', url: '/sumadora', icon: 'add'  },
    { title: 'Traductor', url: '/traductor', icon: 'language' },
    { title: 'Tabla de Multiplicar', url: '/tabla-de-multiplicar', icon: 'Calculator' },
    { title: 'Experiencia', url: '/experiencia', icon: 'people' }
  ];
  
  constructor(){}
}
