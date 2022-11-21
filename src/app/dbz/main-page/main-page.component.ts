import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  
// get personajes(): Personaje[] {
//   return this.DbzService.personajes
// }
  
  nuevo: Personaje = {
    nombre: "Maestro Roshi",
    poder: 7500
  }


  
  constructor() {}

}
